import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();


app.use(
  cors({
    origin: "https://ramajeevitha-portfolio.vercel.app/",
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use(express.json());
app.use("/contact", contactRoutes);
app.get("/", (req, res) => res.send(" Backend API running successfully!"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
