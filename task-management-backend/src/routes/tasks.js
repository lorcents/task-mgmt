const express = require('express');
const router = express.Router();
const { Task } = require('../../models');

// Create a task
router.post('/', async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;
    if (!title || !description || !dueDate) {
      return res.status(400).json({ error: 'Title, description, and due date are required.' });
    }

    const task = await Task.create({ title, description, dueDate, status });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Update task status
router.put('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(taskId)
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: 'Status is required.' });
    }

    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    task.status = status;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
