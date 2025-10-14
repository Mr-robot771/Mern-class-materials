import { connectDB } from "./config/db.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
})();
