import avatarPlaceholder from "../../assets/img/avatar_placeholder.jpg";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";

const UserContacts = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser({ user, chat });

  return (
    <>
      <div className="flex items-center rounded-md gap-2 p-1 bg-neutral-700 bg-opacity-40 border border-neutral-700 hover:border-emerald-600 hover:bg-opacity-100 cursor-pointer">
        <img
          className="h-6 rounded-full"
          src={avatarPlaceholder}
          alt="user avatar image"
        />
        {recipientUser?.name === "alex" ? (
          <h4 className="text-sm truncate text-violet-300 glow-text">
            {recipientUser?.name}
          </h4>
        ) : (
          <h4 className="text-sm truncate">{recipientUser?.name}</h4>
        )}
      </div>
    </>
  );
};

export default UserContacts;
