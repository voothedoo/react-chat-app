import { useContext } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchCurrentChatRecipient } from "../../hooks/useFetchCurrentChatRecipient.js";

import "ldrs/ring";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, messagesError } =
    useContext(ChatContext);

  const { recipientUser } = useFetchCurrentChatRecipient({ currentChat, user });

  if (!recipientUser)
    return (
      <>
        <div className=" w-3/5 h-10/12 h-full">
          <h2 className="text-xl mb-3">
            <p className="flex items-center gap-2">
              <LuMessagesSquare /> Message
            </p>
          </h2>
          <div className="bg-neutral-700 rounded-md border border-neutral-600 ">
            <div>
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg shadow">
                No Conversation Selected
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );

  if (isMessagesLoading)
    return (
      <>
        <div className=" w-3/5 h-10/12 h-full">
          <h2 className="text-xl mb-3">
            <p className="flex items-center gap-2">
              <LuMessagesSquare /> Message
            </p>
          </h2>
          <div className="bg-neutral-700 rounded-md border border-neutral-600 h-4/5">
            <div>
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg shadow">
                <l-ring size={18} color="#00df8e"></l-ring>
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className=" w-3/5 h-10/12 h-full">
        <h2 className="text-xl mb-3">
          <p className="flex items-center gap-2">
            <LuMessagesSquare /> Message
          </p>
        </h2>
        <div className="bg-neutral-700 rounded-md border border-neutral-600 h-4/5">
          <div>
            {recipientUser?.name === "alex" ? (
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg shadow  text-violet-300 glow-text">
                {recipientUser?.name}
              </h3>
            ) : (
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg shadow">
                {recipientUser?.name}
              </h3>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
