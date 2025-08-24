import NotificationService from "../services/Notification.js";

export const createNotification = async (req, res) => {
  try {
    const { userId, type, message } = req.body;
    const notif = await NotificationService.send(userId, type, message);
    res.status(201).json({ success: true, id: notif.id });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const notif = await NotificationService.status(req.params.id);
    res.json(notif);
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
