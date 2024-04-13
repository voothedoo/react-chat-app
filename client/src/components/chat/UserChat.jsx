import avatarPlaceholder from "../../assets/img/avatar_placeholder.jpg";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";
import { NavLink } from "react-router-dom";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser({ user, chat });

  return (
    <NavLink
      to={recipientUser?._id}
      className="user-chat flex justify-between items-center gap-2  p-2 rounded-md bg-neutral-700  border-neutral-600 border hover:border-emerald-600 cursor-pointer"
    >
      <img
        className="h-10 rounded-lg"
        src={avatarPlaceholder}
        alt="user avatar image"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between text-sm items-center">
          <p className="flex items-center gap-1 text-white text-base">
            <span className="w-2 h-2 bg-green-600 rounded-full block"></span>
            {recipientUser?.name}
          </p>
          <p className="text-xs text-neutral-400">12 April</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-xs text-neutral-400 italic">
            Random message being disp...
          </p>
          <p className="text-xs text-white bg-orange-600 py- px-2 rounded-full">
            2
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default UserChat;
