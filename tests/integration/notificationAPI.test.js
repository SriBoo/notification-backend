import request from "supertest";
import app from "../../src/app.js";

describe("Notification API", () => {
  it("POST /api/notify creates notification", async () => {
    const res = await request(app)
      .post("/api/notify")
      .send({ userId: "u1", type: "EMAIL", message: "Hello" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});
