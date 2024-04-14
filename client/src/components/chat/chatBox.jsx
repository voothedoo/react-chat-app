import { useContext } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchCurrentChatRecipient } from "../../hooks/useFetchCurrentChatRecipient.js";
import moment from "moment";

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
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg ">
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
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg   text-violet-300 glow-text">
                {recipientUser?.name}
              </h3>
            ) : (
              <h3 className="text-center bg-neutral-900 bg-opacity-30 p-2 rounded-tr-lg rounded-tl-lg ">
                {recipientUser?.name}
              </h3>
            )}
          </div>

          {messages?.map((message, index) => (
            <div
              key={index}
              className="bg-neutral-800 bg-opacity-70 w-5/12 px-4 py-2 m-2 rounded-xl"
            >
              <h3 className="pb-1">{message.text}</h3>
              <p className="text-neutral-500 text-end italic text-xs">
                {moment(message.currentChat).calendar()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
