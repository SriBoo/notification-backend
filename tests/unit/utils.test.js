import { logger } from "../../src/utils/logger.js";

test("logger.info logs message", () => {
  console.log = jest.fn();
  logger.info("Test");
  expect(console.log).toHaveBeenCalledWith("Test");
});
