import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";
const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    try {
      await sendMessage(message);
      setMessage("");
    } catch (error) {
      console.error("Fehler beim Senden der Nachricht:", error);
    }
  };
  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner "></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;

// // STARTER CODE

// import { BsSend } from 'react-icons/bs'
// const MessagesInput = () => {
//   return (
// <form action=""
// className="px-4 my-3">
//       <div className="w-full">
//             <input type="text"
//             className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//             placeholder="Send a message..." />
//             <button type="submit" className="absolute insert-y-0 end-0 flex items-centerpe-3">
//                   <BsSend/>

//             </button>

//       </div>

// </form>  )
// }

// export default MessagesInput
