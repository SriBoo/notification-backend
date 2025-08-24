import { Notification } from "../models/index.js";

export async function processEmail(job) {
  try {
    console.log(`Sending email: ${job.message}`);
    await Notification.findByIdAndUpdate(job.id, { status: "SENT" });
  } catch (err) {
    await Notification.findByIdAndUpdate(job.id, { status: "FAILED" });
    console.error("Email sending failed:", err.message);
  }
}
