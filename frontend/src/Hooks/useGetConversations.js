import { useState, useEffect } from "react";
import toast from "react-hot-toast";



const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getconversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5001/api/users/", {
            method: "GET",
            
            credentials: "include",
          });
          
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
        const data = await res.json();
        console.log("hello")
        console.log(data)
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
            toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
      getconversations();
  }, [ ]);
  return { loading, conversations };
};

export default useGetConversations;
