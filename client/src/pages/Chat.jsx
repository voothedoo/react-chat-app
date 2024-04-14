import { useContext } from "react";
import { ChatContext } from "../context/ChatContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { v4 as uuidv4 } from "uuid";

import "ldrs/ring";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { GrCircleAlert } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import avatarPlaceholder from "../assets/img/avatar_placeholder.jpg";
import UserChat from "../components/chat/UserChat.jsx";
import PotentialChats from "../components/chat/potentialChats.jsx";
import UserContacts from "../components/chat/userContacts.jsx";
import ChatBox from "../components/chat/chatBox.jsx";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, potentialChats } =
    useContext(ChatContext);

  return (
    <div className="flex flex-row justify-between w-full h-full gap-2">
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

      <ChatBox />

      <div className=" bg-neutral-700 w-px h-90 opacity-30"></div>
      <div className=" w-40 ">
        <h2 className="flex items-center gap-2 mb-2 text-xl">
          <FiUsers />
          Contacts
        </h2>
        <div className="mb-4 flex flex-col gap-1">
          {userChats?.length > 0 ? (
            <>
              <h3 className="text-emerald-600">Online</h3>
              {userChats?.map((chat) => {
                return <UserContacts key={uuidv4()} chat={chat} user={user} />;
              })}
            </>
          ) : (
            ""
          )}
        </div>
        <div className="mb-4 flex flex-col gap-1">
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
        <div className="mb-4 flex flex-col gap-1">
          {potentialChats.length > 0 ? (
            <>
              <h3 className="text-cyan-600">Chat Suggestions</h3>
              {potentialChats.map((chat) => (
                <PotentialChats key={uuidv4()} conversationPartner={chat} />
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
