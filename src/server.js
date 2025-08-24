import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./models/index.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(" DB connection failed:", err));
