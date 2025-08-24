import mongoose from "mongoose";
import Notification from "./Notification.js";

export async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/notifications";
  await mongoose.connect(uri, { autoIndex: true });
  console.log("MongoDB connected");
}

export { Notification };
