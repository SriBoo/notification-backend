import { Notification } from "../models/index.js";
import { enqueueJob } from "../workers/queue.js";

class NotificationService {
  static async send(userId, type, message) {
    const notif = await Notification.create({ userId, type, message, status: "PENDING" });
    await enqueueJob({ id: notif.id, userId, type, message });
    return notif;
  }

  static async status(id) {
    const notif = await Notification.findById(id);
    if (!notif) throw new Error("Notification not found");
    return notif;
  }
}

export default NotificationService;
