const db = require("../db");

//Selects all tasks from the database asynchronously, organizes the tasks by most recent, returns an array of tasks.

const getTasks = async () => {
  //correct this SQL query to select all tasks from the database(fixed)
  const res = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
  
  return res.rows;
};

// Inserts a new task into the database with the given title and description, task is marked as incomplete then assigned a timestamp, returns new task.
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
