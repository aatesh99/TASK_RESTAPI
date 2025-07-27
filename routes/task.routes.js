// routes/task.routes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

// GET /tasks – fetch all tasks
router.get('/', taskController.getAllTasks);

// GET /tasks/:id – fetch a task by ID
router.get('/:id', taskController.getTaskById);

// POST /tasks – create a new task
router.post('/', taskController.createTask);

// PUT /tasks/:id – update a task by ID
router.put('/:id', taskController.updateTask);

// DELETE /tasks/:id – delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;