import { useContext, useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchCurrentChatRecipient } from "../../hooks/useFetchCurrentChatRecipient.js";
import moment from "moment";
import InputEmoji from "react-input-emoji";

import { LuSend } from "react-icons/lu";

import "ldrs/ring";

const ChatBox = () => {
  const [text, setText] = useState("");

  function handleOnEnter() {
    createMessage(currentChat?._id, user?._id, text);
    setText("");
  }

  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, createMessage } =
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
              <h3 className="text-center bg-emerald-950 bg-opacity-90 p-2 rounded-tr-lg rounded-tl-lg shadow">
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
              <h3 className="text-center bg-slate-950 bg-opacity-50 p-2 rounded-tr-lg rounded-tl-lg ">
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
      <div className=" w-3/5 max-h-10/12 h-full">
        <h2 className="text-xl mb-3">
          <p className="flex items-center gap-2">
            <LuMessagesSquare /> Message
          </p>
        </h2>
        <div className="flex flex-col background-pattern bg-neutral-700 rounded-lg border border-neutral-700 h-4/5 ">
          <div>
            {recipientUser?.name === "alex" ? (
              <h3 className="text-center bg-neutral-800  p-2 rounded-tr-lg rounded-tl-lg  text-violet-300 glow-text shadow">
                {recipientUser?.name}
              </h3>
            ) : (
              <h3 className=" text-center bg-neutral-800  p-2 rounded-tr-lg rounded-tl-lg shadow ">
                {recipientUser?.name}
              </h3>
            )}
          </div>
          <div className="w-full overflow-auto flex flex-col">
            {messages?.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.senderId === user._id ? "user-message " : ""
                }bg-neutral-800 px-4 py-2 m-2 rounded-xl shadow message-box whitespace-normal overflow-wrap message`}
              >
                <h3 className="pb-1">{message.text}</h3>
                <p className="text-neutral-500 text-end italic text-xs message-date">
                  {moment(message.createdAt).calendar()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto w-full py-2 bg-neutral-800 rounded-b-lg flex items-center shadow">
            <InputEmoji
              background="#bbbbbb"
              placeholderColor="#696969"
              borderColor="#696969"
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
            />
            <button onClick={handleOnEnter} className="pr-3">
              <LuSend className="text-emerald-800 text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
