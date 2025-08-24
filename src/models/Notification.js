import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, enum: ["EMAIL", "SMS", "PUSH"], required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["PENDING", "SENT", "FAILED"], default: "PENDING" }
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);
