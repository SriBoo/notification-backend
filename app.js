import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", notificationRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.status(200).send("✅ Backend is live and running");
});

// ✅ Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// ✅ Catch-all
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;