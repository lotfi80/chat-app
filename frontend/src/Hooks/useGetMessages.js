import { useEffect, useState } from "react";
import useconversation from "../zustand/useconversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useconversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5001/api/messages/${selectedConversation._id}`, {
            method: "GET",
            
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
      if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
