✅ Task Manager REST API – Project Summary

📌 Goal

Build a lightweight, fully functional REST API for managing tasks using Node.js and Express.js, following clean architecture with:

Router → Controller → Service structure
File-based persistence (tasks.json)
Middleware for error handling and logging
📁 Folder Structure

task-manager-api/
├── controllers/           # Route handlers (business logic adapters)
│   └── task.controller.js
├── services/              # Core business logic (CRUD, persistence)
│   └── task.service.js
├── routes/                # API endpoint routing
│   └── task.routes.js
├── middlewares/           # Custom middleware (error handler, etc.)
│   └── errorHandler.js
├── config/                # (Optional) Configuration utils
├── tasks.json             # Persistent task storage (simple JSON file)
├── .env                   # Environment variables (e.g., PORT)
├── .gitignore             # Ignore node_modules, .env, etc.
├── app.js                 # Main app entrypoint (sets up server)
├── package.json
⚙️ Installed Packages

Package	Purpose
express	Web framework for routing and middleware
dotenv	Load environment variables from .env file
morgan	Log incoming HTTP requests
uuid	Generate unique task IDs
nodemon	Auto-restart server on code changes (dev)
✅ Scripts in package.json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
🌐 API Endpoints

Method	Endpoint	Description
GET	/tasks	Get all tasks
GET	/tasks/:id	Get task by ID
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task by ID
DELETE	/tasks/:id	Delete a task by ID
🧠 Key Concepts

app.js
Loads dotenv
Sets up express.json() to parse JSON
Applies morgan logging
Mounts /tasks route
Adds fallback 404 handler
Adds centralized errorHandler middleware
task.routes.js
Defines endpoint routes
Forwards each route to controller
task.controller.js
Handles HTTP logic (get params/body, send status)
Validates input
Calls corresponding service methods
Uses next(err) to delegate errors
task.service.js
Reads/writes task data to tasks.json
Performs in-place operations on tasks array
Uses fs.readFileSync and fs.writeFileSync
errorHandler.js
Catches thrown or passed errors
Sends consistent error responses (status + message)
🔄 How the App Flows (Request Lifecycle)

app.js receives request
For /tasks route → task.routes.js handles it
Route calls matching controller in task.controller.js
Controller calls logic in task.service.js
Result sent back via res.json() or error sent to next()
If an error is thrown → errorHandler.js responds
🔐 .env File

PORT=3000
🚀 Running the App

Start dev server:

npm run dev
Test endpoints using:

curl from terminal
Postman/Insomnia
Browser (for simple GETs)
🧪 Example Task Object

{
  "id": "a1b2c3",
  "title": "Learn REST API",
  "description": "Build task manager project",
  "completed": false
}
✅ You Are Ready To:

Extend with PATCH /tasks/:id/complete
Add timestamps: createdAt, updatedAt
Add input validation middleware
Swap file storage with MongoDB or another DB later
Reuse the same architecture for users, products, notes, etc.
