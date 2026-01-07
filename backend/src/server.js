const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { pool, testConnection } = require("./db");
const authRoutes = require("./routes/auth.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

const startServer = async () => {
  const dbConnected = await testConnection();

  if (!dbConnected) {
    console.error("Cannot start server without database connection");
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
};
startServer();
module.exports = app;
