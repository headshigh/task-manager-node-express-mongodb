const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  greet,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.js");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
router.route("/hello").get(greet);
// router.get("/", getAllTasks);
module.exports = router;
