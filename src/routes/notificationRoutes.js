import express from "express";

const router = express.Router();

// Temporary in-memory store
const notifications = [];

// POST /api/notify
router.post("/", (req, res) => {
  const { userId, type, message } = req.body;

  const newNotification = {
    _id: String(Date.now()), // simulate unique ID
    userId,
    type,
    message,
    status: "SENT",
    createdAt: new Date().toISOString(),
  };

  notifications.push(newNotification);

  console.log("📩 New notification:", newNotification);
  res.json(newNotification); // ✅ return full object
});

// GET /api/notify/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const found = notifications.find((n) => n._id === id);

  if (!found) {
    return res.status(404).json({ error: "Notification not found" });
  }

  res.json(found); // ✅ return full object
});

export default router;