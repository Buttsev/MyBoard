const express = require("express");
const authRoutes = require("../routes/auth.routes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  console.log("Health check at: http://localhost:" + PORT + "/health");
});
