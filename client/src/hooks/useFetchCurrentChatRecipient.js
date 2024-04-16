import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchCurrentChatRecipient = ({ currentChat, user }) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = currentChat?.members?.find((id) => id !== user?._id);

  useEffect(() => {

    const getUser = async () => {
      if (!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return setError(response);
      }

      setRecipientUser(response);
    };

    getUser();

  }, [recipientId]);

  return { recipientUser };
};