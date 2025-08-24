import NotificationService from "../../src/services/Notification.js";
import { Notification } from "../../src/models/index.js";

jest.mock("../../src/models/index.js");

test("creates and enqueues notification", async () => {
  Notification.create.mockResolvedValue({ id: "123", status: "PENDING" });
  const notif = await NotificationService.send("u1", "EMAIL", "Hello!");
  expect(notif.id).toBe("123");
});
