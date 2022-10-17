const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.status(200).send({ sucess: true, data: "Here is all the data" });
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};
const getTask = (req, res) => {
  res.status(200).send("Get single task");
};
const updateTask = (req, res) => {
  res.status(200).send("Get single task");
};
const deleteTask = (req, res) => {
  res.status(200).send("Get single task");
};

const greet = (req, res) => {
  res.status(200).send("Hello World");
};
module.exports = {
  getAllTasks,
  createTask,
  greet,
  getTask,
  updateTask,
  deleteTask,
};
