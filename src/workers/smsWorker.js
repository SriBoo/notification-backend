import { Notification } from "../models/index.js";

export async function processSMS(job) {
  try {
    console.log(`Sending SMS: ${job.message}`);
    await Notification.findByIdAndUpdate(job.id, { status: "SENT" });
  } catch (err) {
    await Notification.findByIdAndUpdate(job.id, { status: "FAILED" });
    console.error("SMS sending failed:", err.message);
  }
}
