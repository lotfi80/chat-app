import { useSocketContext } from "../context/SocketContext";
import useconversation from "../zustand/useconversation";
import { useEffect } from "react";
import notificationSound from "../assets/mixkit-long-pop-2358.wav";

const useListenMessages = () => {

      const {socket}= useSocketContext()
      const {messages , setMessages} = useconversation()
      useEffect(() => {
            socket?.on("newMessage", (newMessage)=>{
                  newMessage.shouldShake = true
                  const sound = new Audio(notificationSound)
                  sound.play()
                  setMessages([...messages,newMessage])
            })
            return ()=> socket?.off("newMessage")
         
      }, [socket, setMessages,messages])

};

export default useListenMessages;