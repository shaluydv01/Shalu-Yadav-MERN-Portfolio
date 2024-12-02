import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
// import bodyParser from "express";
import cors from "cors"; // Import cors
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(
  cors({
    origin: true,
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "mernPortfolio", "dist")));

//userRouter
app.use("/api", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "mernPortfolio", "dist", "index.html"));
});


mongoose
  .connect(
    "mongodb+srv://shaluyadav1709:haSY56trnvKL87Dsa830a@cluster0.5gzz5.mongodb.net/",
    {
      dbName: "mern-portfolio",
    }
  )
  .then(() => console.log("MongodB is connected...!"))
  .catch(err => console.log("MongoDB connection error:", err));

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
