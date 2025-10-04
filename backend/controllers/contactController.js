import Contact from "../models/Contact.js";

// Save message
export const saveMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Fetch all messages (for admin)
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
