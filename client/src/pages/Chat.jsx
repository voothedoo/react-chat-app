import { useContext } from "react";
import { ChatContext } from "../context/ChatContext.jsx";
import avatarPlaceholder from "../assets/img/avatar_placeholder.jpg";

const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);
  console.log("From chat.jsx:", userChats);
  return (
    <>
      <h1>Active Chats</h1>
      <div>
        <div className="flex justify-between gap-2 w-72 p-2 rounded-md bg-neutral-700">
          <img
            className="h-12 rounded-lg"
            src={avatarPlaceholder}
            alt="user avatar image"
          />
          <div className="w-full">
            <div className="flex justify-between">
              <p>Random Person</p>
              <p>12 April</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Chat;
