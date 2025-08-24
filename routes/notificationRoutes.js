import express from "express";

// ✅ Add this line at the top (after express import)
import {
  createNotification,
  getNotifications
} from "../controllers/notificationController.js";

const router = express.Router();

// Routes
router.post("/notify", createNotification);
router.get("/notifications/:userId", getNotifications);

export default router;