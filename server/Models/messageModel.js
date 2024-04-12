import { mongoose } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamp: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema);
export default messageModel;