import { useContext } from "react";
import avatarPlaceholder from "../../assets/img/avatar_placeholder.jpg";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";
import { NavLink } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser({ chat, user });
  const { updateCurrentChat } = useContext(ChatContext);
  return (
    <div
      onClick={() => updateCurrentChat(chat)}
      className="user-chat flex justify-between items-center gap-2 p-2 rounded-md bg-neutral-700 bg-opacity-50 border-neutral-700 border hover:border-emerald-600 hover:bg-opacity-100 cursor-pointer"
    >
      <img
        className="h-10 rounded-lg"
        src={avatarPlaceholder}
        alt="user avatar image"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between text-sm items-center">
          {recipientUser?.name === "alex" ? (
            <p className="flex items-center gap-1 text-base text-violet-300 glow-text">
              <span className="w-2 h-2 bg-green-600 rounded-full block"></span>
              {recipientUser?.name}
            </p>
          ) : (
            <p className="flex items-center gap-1 text-white text-base">
              <span className="w-2 h-2 bg-green-600 rounded-full block"></span>
              {recipientUser?.name}
            </p>
          )}
          <p className="text-xs text-neutral-400">12 April</p>
        </div>
        <div className="flex justify-between items-end max-w-40">
          <p className="text-xs text-neutral-400 italic truncate">
            Randoadadad ada adadada
          </p>
          <p className="text-xs text-white bg-orange-600  px-2 rounded-full">
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
