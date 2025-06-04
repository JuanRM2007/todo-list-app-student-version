const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it(fixed)
const taskModel = require("../models/taskModel");

//Retrieves all tasks from the database then responds with an array.
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});


//Adds a new task to the database, requests a name and a description, responds with a new task and a 201 status.

router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix(fixed)
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
