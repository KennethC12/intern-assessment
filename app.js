require("dotenv").config();
const express = require("express");
const sequelize = require("./database");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const taskRoutes = require("./routes/tasks");

app.use(bodyParser.json());

// Check DB connection
async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

assertDatabaseConnectionOk();

// Define additional models and routes here
app.use("/", taskRoutes);

// Handle root URL 
app.get("/", (req, res) => {
  res.send("Welcome to the Todo App API"); // Send a welcome message
});

// Synchronize models with the database
sequelize
  .sync({ alter: true, logging: false })
  .then(() => {
    console.log("Database & tables created!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to sync database:", error);
  });