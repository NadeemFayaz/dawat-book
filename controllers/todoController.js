const Todo = require('../models/Todo');

// Create a Todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTodo = await Todo.create({ title, description, status });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Todos (with optional status filtering)
exports.getTodos = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const todos = await Todo.find(query);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
