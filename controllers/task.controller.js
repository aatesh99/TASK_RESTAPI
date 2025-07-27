// controllers/task.controller.js

const taskService = require('../services/tasks.services');

// GET /tasks
exports.getAllTasks = (req, res, next) => {
  try {
    const tasks = taskService.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// GET /tasks/:id
exports.getTaskById = (req, res, next) => {
  try {
    const task = taskService.getById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// POST /tasks
exports.createTask = (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = taskService.create({ title, description });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

// PUT /tasks/:id
exports.updateTask = (req, res, next) => {
  try {
    const updated = taskService.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /tasks/:id
exports.deleteTask = (req, res, next) => {
  try {
    const success = taskService.remove(req.params.id);
    if (!success) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(204).send(); // No content
  } catch (err) {
    next(err);
  }
};