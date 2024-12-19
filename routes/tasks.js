// Outline:
// Create tasks
// Read tasks
// Update tasks
// Delete tasks
// List all tasks
// List all completed tasks
// List all pending tasks
// Mark a task as completed

const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll(); // Find all tasks
    res.status(201).json(tasks);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
});

// Create a new task
router.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body); // Create a new task
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// List all completed tasks
router.get("/tasks/completed", async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { completed: true } }); // Find all completed tasks
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// List all pending tasks
router.get("/tasks/pending", async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { completed: false } }); // Find all pending tasks
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a task by ID
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id); // Find a task by ID
    if (task) { 
      res.json(task); // If task exists return it
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task by ID
router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id); // Find a task by ID
    if (task) {
      await task.update(req.body); //If task exists update it
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Mark a task as completed
router.patch("/tasks/:id/completed", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id); // Find a task by ID
    if (task) {
      task.completed = true; // If task exists mark it as completed
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a task by ID
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id); // Find a task by ID
    if (task) {
      await task.destroy(); // If task exists delete it
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;