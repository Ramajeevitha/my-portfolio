import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/contact", contactRoutes);

app.get("/", (req, res) => res.send("🚀 Backend API running"));

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
);
