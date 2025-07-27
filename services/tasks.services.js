// services/task.service.js

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, '../tasks.json');

// 🔄 Utility to read tasks from file
const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading tasks:', err);
    return [];
  }
};

// 💾 Utility to write tasks to file
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error('Error writing tasks:', err);
  }
};

exports.getAll = () => {
  return readTasks();
};

exports.getById = (id) => {
  const tasks = readTasks();
  return tasks.find((task) => task.id === id);
};

exports.create = (data) => {
  const tasks = readTasks();
  const newTask = {
    id: uuidv4(),
    title: data.title,
    description: data.description || '',
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  return newTask;
};

exports.update = (id, data) => {
  const tasks = readTasks();
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;

  tasks[index] = { ...tasks[index], ...data };
  writeTasks(tasks);
  return tasks[index];
};

exports.remove = (id) => {
  let tasks = readTasks();
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  writeTasks(tasks);
  return true;
};