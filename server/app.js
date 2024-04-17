import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose'; // Corrected import
import 'dotenv/config';
import userRouter from './Routes/userRoute.js';
import chatRouter from './Routes/chatRoute.js';
import messageRouter from './Routes/messageRoute.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/chats', chatRouter);
app.use('/messages', messageRouter);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "https://alex-chatapp.netlify.app/",
    methods: ["GET", "POST"]
  }
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some(user => user.userId === userId)) {
      onlineUsers.push({
        userId,
        socketId: socket.id
      });
    }
    io.emit("getOnlineUsers", onlineUsers);
  });

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
    console.log("User disconnected:", socket.id);
    onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

(async () => {
  try {
    const URI = process.env.ATLAS_URI;
    await connect(URI);
    console.log('MongoDB connection established!');
  } catch (err) {
    console.error('MongoDB connection failed', err);
  }
})();