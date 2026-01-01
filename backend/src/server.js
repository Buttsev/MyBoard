const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

app.use("/auth", (req, res) => {
  res.status(501).json({ error: "Auth routes are in development" });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  console.log("Health check at: http://localhost:" + PORT + "/health");
});
