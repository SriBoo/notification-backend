import { processEmail } from "../../src/workers/emailWorker.js";
import { Notification } from "../../src/models/index.js";

jest.mock("../../src/models/index.js");

test("processEmail updates status to SENT", async () => {
  Notification.findByIdAndUpdate.mockResolvedValue(true);
  await processEmail({ id: "123", message: "Hello" });
  expect(Notification.findByIdAndUpdate).toHaveBeenCalledWith("123", { status: "SENT" });
});
