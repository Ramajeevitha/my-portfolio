import express from "express";
import { saveMessage, getMessages, deleteMessage } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", saveMessage);        // POST /contact
router.get("/", getMessages);         // GET /contact
router.delete("/:id", deleteMessage); // DELETE /contact/:id

export default router;
