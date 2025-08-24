import mongoose from "mongoose";
import { Notification, connectDB } from "../../src/models/index.js";

beforeAll(async () => await connectDB());
afterAll(async () => await mongoose.connection.close());

test("creates and retrieves notification", async () => {
  const notif = await Notification.create({ userId: "u2", type: "SMS", message: "Test" });
  const fetched = await Notification.findById(notif.id);
  expect(fetched.message).toBe("Test");
});
