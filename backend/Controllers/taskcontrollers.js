const Task = require("../Model/models");

// GET all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE task
exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

// UPDATE task
exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};