const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./Confi/db");

const taskRoutes = require("./Routes/taskroutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// routes
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});