import { useContext, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { notifications, userChats, allUsers } = useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const modifiedNotifications = notifications.map((n) => {
    const sender = allUsers.find((user) => user?._id === n.senderId);

    return {
      ...n,
      senderName: sender?.name,
    };
  });
  return (
    <div className="flex items-center">
      <IoIosNotificationsOutline
        className="main-color text-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <div className="notifications-box">
          <div className="notifications-header">
            <div>
              <p className="mark-as-read">Mark all as read</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
