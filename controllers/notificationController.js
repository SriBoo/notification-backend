import { Notification } from "../models/Notification.js";

// ✅ Create a new notification
export const createNotification = async (req, res) => {
  try {
    const { userId, type, message } = req.body;

    // Basic validation
    if (!userId || !type || !message) {
      console.warn("⚠️ Missing fields in request body:", req.body);
      return res.status(400).json({ error: "userId, type, and message are required" });
    }

    const notif = await Notification.create({ userId, type, message });
    res.status(201).json(notif); // ✅ Use 201 for successful creation
  } catch (err) {
    console.error("❌ Error creating notification:", err);
    res.status(500).json({ error: "Failed to create notification" });
  }
};

// ✅ Get notifications for a user
export const getNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      console.warn("⚠️ Missing userId in request params");
      return res.status(400).json({ error: "userId is required" });
    }

    const notifs = await Notification.find({ userId }).sort({ createdAt: -1 }); // ✅ Sort by latest
    res.status(200).json(notifs);
  } catch (err) {
    console.error("❌ Error fetching notifications:", err);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};