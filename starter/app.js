const express = require("express");
require("./db/connect");
//schema and models
const Task = require("./models/Task");
const app = express();
app.use(express.static("./public"));
const tasks = require("./routes/task");
app.use(express.json());
const connectDb = require("./db/connect");
app.use("/api/v1/tasks", tasks);
require("dotenv").config();
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  } catch (err) {
    console.log(err);
  }
};
start();

//app.get('/api/v1/tasks')-get all tasks create new task post(/tasks)
