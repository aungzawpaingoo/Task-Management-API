const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const Task = require('./models/Task');
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send(`
        <html>
            <head>
                <!-- Import Google Fonts -->
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Quicksand:wght@500;600&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        font-family: 'Roboto', sans-serif;
                        background-color: #f0f8ff; /* Light blue background */
                        color: #333;
                        line-height: 1.6;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }

                    header {
                        background-color: #007bff; /* Primary blue */
                        color: white;
                        padding: 20px 0;
                        text-align: center;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    header h1 {
                        font-family: 'Quicksand', sans-serif;
                        font-size: 40px;
                        margin-bottom: 10px;
                        font-weight: 500;
                    }

                    header p {
                        font-family: 'Roboto', sans-serif;
                        font-size: 20px;
                        font-weight: 300;
                    }

                    .container {
                        width: 80%;
                        margin: 0 auto;
                        padding: 30px;
                        background-color: white;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        border-radius: 12px;
                        margin-top: 20px;
                        flex: 1;
                    }

                    h2 {
                        color: #007bff;
                        margin-bottom: 20px;
                        font-size: 30px;
                        font-weight: 500;
                        font-family: 'Quicksand', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin-bottom: 30px;
                    }

                    ul li {
                        font-size: 18px;
                        margin-bottom: 12px;
                        font-family: 'Roboto', sans-serif;
                    }

                    ul li strong {
                        color: #0056b3;
                    }

                    pre {
                        background-color: #f4f6f9;
                        border-radius: 5px;
                        padding: 20px;
                        font-family: 'Courier New', monospace;
                        color: #333;
                        word-wrap: break-word;
                        margin-bottom: 30px;
                    }

                    .btn {
                        background-color: #007bff;
                        color: white;
                        padding: 12px 20px;
                        text-decoration: none;
                        border-radius: 6px;
                        font-size: 18px;
                        display: inline-block;
                        transition: background-color 0.3s ease;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        font-family: 'Roboto', sans-serif;
                        margin-top: 30px;
                    }

                    .btn:hover {
                        background-color: #0056b3;
                    }

                    .tech-stack {
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-top: 30px;
                    }

                    .tech-stack div {
                        text-align: center;
                        margin: 10px;
                    }

                    .tech-stack i {
                        font-size: 50px;
                        color: #007bff;
                    }

                    .tech-stack p {
                        font-family: 'Roboto', sans-serif;
                        color: #333;
                        margin-top: 10px;
                    }

                    .note {
                        background-color: #e0f7fa;
                        border-left: 5px solid #007bff;
                        color: #007bff;
                        padding: 15px;
                        margin-top: 30px;
                        border-radius: 5px;
                    }

                    footer {
                        background-color: #343a40;
                        color: white;
                        text-align: center;
                        padding: 15px;
                        margin-top: 40px;
                        font-size: 16px;
                        font-family: 'Roboto', sans-serif;
                    }

                    footer p {
                        font-weight: 300;
                    }

                    .footer-link {
                        color: #007bff;
                        text-decoration: none;
                    }

                    .footer-link:hover {
                        text-decoration: underline;
                    }

                    .contact {
                        margin-top: 40px;
                        padding: 20px;
                        background-color: #f0f8ff;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    .contact h3 {
                        color: #007bff;
                        font-family: 'Quicksand', sans-serif;
                    }

                    .contact p {
                        color: #555;
                        font-size: 16px;
                        font-family: 'Roboto', sans-serif;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Task Manager API</h1>
                    <p>Manage your tasks with ease!</p>
                </header>

                <div class="container">
                    <!-- Welcome Section -->
                    <section>
                        <h2>Welcome to the Task Manager API</h2>
                        <p>This API allows you to create, update, delete, and manage tasks efficiently. Below are the available API endpoints that you can use:</p>
                    </section>

                    <!-- Available Endpoints Section -->
                    <section>
                        <h2>Available Endpoints</h2>
                        <ul>
                            <li><strong>GET /tasks</strong> - Retrieve all tasks</li>
                            <li><strong>GET /tasks/:id</strong> - Retrieve a specific task by ID</li>
                            <li><strong>POST /tasks</strong> - Create a new task</li>
                            <li><strong>PUT /tasks/:id</strong> - Update an existing task by ID</li>
                            <li><strong>DELETE /tasks/:id</strong> - Delete a task by ID</li>
                        </ul>
                    </section>

                    <!-- Tech Stack Section -->
                    <section>
                        <h2>Tech Stack</h2>
                        <div class="tech-stack">
                            <div>
                                <i class="material-icons">code</i>
                                <p>Node.js</p>
                            </div>
                            <div>
                                <i class="material-icons">settings_input_component</i>
                                <p>Express.js</p>
                            </div>
                            <div>
                                <i class="material-icons">cloud</i>
                                <p>MongoDB</p>
                            </div>
                            <div>
                                <i class="material-icons">developer_mode</i>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </section>

                    <!-- Example Usage Section -->
                    <section>
                        <h2>Example Usage</h2>
                        <p>To create a task, send a POST request to <code>/tasks</code> with the following JSON body:</p>
                        <pre>
{
    "title": "New Task",
    "description": "This is a test task.",
    "status": "pending",
    "dueDate": "2024-12-20"
}
                        </pre>
                        <p>To update a task, send a PUT request to <code>/tasks/:id</code> with the task ID and updated data.</p>
                        <p>To delete a task, send a DELETE request to <code>/tasks/:id</code>.</p>
                    </section>

                    <!-- Note Section -->
                    <div class="note">
                        <h3>Note:</h3>
                        <p>Make sure you provide a valid <code>taskId</code> when updating or deleting tasks.</p>
                    </div>

                    <a href="https://github.com/aungzawpaingoo/Task-Management-API" class="btn">View GitHub Repo</a>
                </div>

                <!-- Footer Section -->
                <footer>
                    <p>&copy; 2024 Task Manager API. All rights reserved.</p>
                    <p>Build by <a href="https://github.com/aungzawpaingoo" class="footer-link">Aung Zaw Paing Oo</a></p>
                    
                </footer>
            </body>
        </html>
    `);
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