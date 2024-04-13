import { useContext } from "react";
import { ChatContext } from "../context/ChatContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { v4 as uuidv4 } from "uuid";

import "ldrs/ring";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { GrCircleAlert } from "react-icons/gr";
import UserChat from "../components/chat/UserChat.jsx";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    <>
      <div className="flex flex-col gap-1 w-72">
        {isUserChatsLoading ? (
          <div className="flex items-center gap-2 mb-2 text-xl">
            <l-ring size={18} color="#00df8e"></l-ring>
            <p>Getting Your Conversations</p>
          </div>
        ) : (
          <h1 className="text-xl mb-2">
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
          </h1>
        )}
        {userChats?.map((chat) => {
          return <UserChat key={uuidv4()} chat={chat} user={user} />;
        })}
      </div>
      <div></div>
    </>
  );
};

export default Chat;
