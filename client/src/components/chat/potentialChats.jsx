import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

import avatarPlaceholder from "../../assets/img/avatar_placeholder.jpg";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = ({ conversationPartner }) => {
  const { user } = useContext(AuthContext);
  const { createChats, onlineUsers, updateCurrentChat } =
    useContext(ChatContext);

  const handleOnClick = () => {
    createChats(user._id, conversationPartner?._id);
  };

  return (
    <>
      <div
        className="flex items-center rounded-md gap-2 p-1 bg-neutral-700 bg-opacity-40 border border-neutral-700 hover:border-emerald-600 hover:bg-opacity-100 cursor-pointer"
        onClick={handleOnClick}
      >
        <img
          className="h-6 rounded-full"
          src={avatarPlaceholder}
          alt="user avatar image"
        />
        {onlineUsers.some(
          (user) => user?.userId === conversationPartner?._id
        ) ? (
          <span className="w-2 h-2 bg-green-600 rounded-full block online-ligth"></span>
        ) : (
          ""
        )}

        {conversationPartner?.name === "alex" ? (
          <h4 className="text-sm text-violet-300 glow-text">
            {conversationPartner?.name}
          </h4>
        ) : (
          <h4 className="text-sm">{conversationPartner?.name}</h4>
        )}
      </div>
    </>
  );
};

export default PotentialChats;
