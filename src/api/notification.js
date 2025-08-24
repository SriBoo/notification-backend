import express from "express";
import { createNotification, getStatus } from "../controllers/notification.js";

const router = express.Router();

router.post("/", createNotification);
router.get("/:id", getStatus);

export default router;
