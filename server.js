const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const Task = require('./models/Task');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Task Manager API");
});

mongoose.connect('mongodb://localhost:27017/taskManager',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.log('Error Connecting to MongoDB', error));

app.post('/tasks', async (req, res)=>{
    try {
        
        const task = new Task({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
        });

        await task.save();

        res.status(201).send(task);
    } catch (error) {
        
        res.status(400).send({error: 'Error Creating Task'});

    }
});


app.get('/tasks', async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({error: 'Error Fetching Tasks'});
    }
});


app.put('/tasks/:id', async (req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                dueDate: req.body.dueDate,
            }, 
            {new : true}
        );

        if(!task) {
            res.status(404).send({error: 'Task Not Found !'});
        }

        res.status(200).send(task);
    } catch (error) {
        res.status(400).send({error: 'Error Updating Tasks'});
    }
});


app.delete('/tasks/:id', async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            res.send(404).send({error: 'Task Not Found'});
        }

        res.status(200).send({message: 'Task Deleted Successfully'});
    } catch (error) {
        res.status(500).send({error: 'Error Deleting Tasks'});
    }
});


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});