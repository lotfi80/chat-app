import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || origin === "http://localhost:5173") {
//         return callback(null, true);
//       }
//       return callback(new Error("CORS not allowed"), false);
//     },
//     credentials: true,
//   })
// );

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       const allowedOrigins = ["http://localhost:5001"];
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }
//       callback(new Error("CORS not allowed"));
//     },
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5001", 
        "https://chat-app-production-zyr2.onrender.com", // deployed frontend
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("CORS not allowed"));
    },
    credentials: true,
  })
);


app.use(express.json()); // to parse the incoming request with JSON payloads
app.use(cookieParser()); // to parse the incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Serve the static assets in production
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
