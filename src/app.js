import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notificationRoutes.js"; 

const app = express();

app.use(cors()); 
app.use(express.json());


app.use("/api/notify", notificationRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Notification backend is running");
});

export default app;
