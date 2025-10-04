import express from "express";
import { saveMessage, getMessages } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", saveMessage);  // POST /contact
router.get("/", getMessages);   // GET /contact (fetch all messages)

export default router;
