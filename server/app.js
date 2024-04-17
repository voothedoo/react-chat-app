import express from 'express';
import cors from 'cors';
import { mongoose } from 'mongoose';
import 'dotenv/config';
import userRouter from './Routes/userRoute.js';
import chatRouter from './Routes/chatRoute.js';
import messageRouter from "./Routes/messageRoute.js";

import { Server } from 'socket.io';


const app = express();
app.use(express.json());

app.use(cors());

app.use('/users', userRouter);
app.use('/chats', chatRouter);
app.use('/messages', messageRouter);

const io = new Server({ cors: "https://alex-chatapp.netlify.app" });

let onlineUsers = [];

io.on("connection", (socket) => {

  //new connection
  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some(user => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id
      });
    }
    io.emit("getOnlineUsers", onlineUsers);
  });


  //add message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(user => user.userId === message.recipientId);
    if (user) {
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    }
  });


  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(3000);


const PORT = process.env.PORT || 5000;
const LOCALHOST = process.env.HOST || "localhost";
const URI = process.env.ATLAS_URI;
app.listen(PORT, (req, res) => {
  console.log(`\nServer running on: \x1b[35mhttp://${LOCALHOST}:${PORT}\x1b[0m`);
});

//DB Connection
(async () => {
  try {
    await mongoose.connect(URI);
    console.log(`✅\x1b[34m MongoDB\x1b[0m connection established!`);
  } catch (err) {
    console.error(`⛔️\x1b[31m MongoDB\x1b[0m  connection failed\n`, err);
    throw err;
  }
})();