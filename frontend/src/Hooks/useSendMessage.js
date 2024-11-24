import { useState } from 'react';
import useConversation  from '../zustand/useconversation.js';
import toast from 'react-hot-toast';

const useSendMessage = () => {

      const [loading , setLoading] = useState(false);
      const {messages , setMessages , selectedConversation } = useConversation();

      const sendMessage = async (message) => {
            try{
                  const res = await fetch(`http://localhost:5001/api/messages/send/${selectedConversation._id}`, {
                        method: 'POST',
                        

                        headers: {
                              'Content-Type': 'application/json'
                        },
                        credentials: "include",
                        body: JSON.stringify({ message }),
                  });
                  console.log("Raw response:", res);
                  const data = await res.json();
                  if (data.error) {
                        throw new Error(data.error);
                  }
                  setMessages([...messages, data]);


            }
            catch (err) {
                  console.error("Error in sendMessage controller: ", err);
            }
      }
      return { loading, sendMessage };
  
}

export default useSendMessage
