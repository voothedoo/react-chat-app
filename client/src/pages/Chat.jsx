import { useContext } from "react";
import { ChatContext } from "../context/ChatContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { v4 as uuidv4 } from "uuid";

import "ldrs/ring";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { GrCircleAlert } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import avatarPlaceholder from "../assets/img/avatar_placeholder.jpg";
import UserChat from "../components/chat/UserChat.jsx";
import PotentialChats from "../components/chat/potentialChats.jsx";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    <div className="flex flex-row justify-between  w-full gap-2">
      <div className="flex flex-col gap-1 w-1/5 min-w-56">
        {isUserChatsLoading ? (
          <div className="flex items-center gap-2 mb-2 text-xl">
            <l-ring size={18} color="#00df8e"></l-ring>
            <p>Getting Your Conversations</p>
          </div>
        ) : (
          <h2 className="text-xl mb-2">
            {userChats.length >= 1 ? (
              <>
                <p className="flex items-center gap-2">
                  <HiOutlineInboxArrowDown />
                  Inbox
                </p>
              </>
            ) : (
              <>
                <p className="flex items-center gap-2">
                  <GrCircleAlert />
                  Inbox is empty
                </p>
              </>
            )}
          </h2>
        )}
        {userChats?.map((chat) => {
          return <UserChat key={uuidv4()} chat={chat} user={user} />;
        })}
      </div>
      <div className="bg-neutral-700 w-3/5 h-10/12 min-h-96">
        <h2 className="flex items-center gap-2 mb-2 text-xl">
          <LuMessagesSquare />
          Message
        </h2>
      </div>
      <div className=" bg-neutral-700 w-px h-90 opacity-30"></div>
      <div className=" w-40 ">
        <h2 className="flex items-center gap-2 mb-2 text-xl">
          <FiUsers />
          Connect
        </h2>
        <div className="mb-4">
          <h3 className="text-emerald-600">Online</h3>
          <div className="flex items-center rounded-md gap-2 p-1 bg-neutral-700 bg-opacity-40 border border-neutral-700 hover:border-emerald-600 hover:bg-opacity-100 cursor-pointer">
            <img
              className="h-6 rounded-full"
              src={avatarPlaceholder}
              alt="user avatar image"
            />
            <h4 className="text-sm">voothedoo1234</h4>
          </div>
        </div>
        <div>
          <h3 className="text-rose-600">Offline</h3>
          <div className="flex items-center rounded-md gap-2 p-1 bg-neutral-700 bg-opacity-10 border border-neutral-700 border-opacity-50 hover:border-emerald-600 hover:bg-opacity-100 cursor-pointer opacity-50 hover:opacity-100 ">
            <img
              className="h-6 rounded-full"
              src={avatarPlaceholder}
              alt="user avatar image"
            />
            <h4 className="text-sm truncate">exampleuser12345dsdasd</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
