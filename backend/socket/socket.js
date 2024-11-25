import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}

io.on("connection", (socket) => {
  console.log("A user connected" , socket.id);
  const userId = socket.handshake.query.userId;
  if (userId && userId != "undefined") userSocketMap[userId] = socket.id;
  // io.emit is used to emit the event to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // socket.on is used to listen to the event , can be used on both client and server
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };


