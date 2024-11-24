import Conversation from "./Conversation";
import useGetConversations from "../../Hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const {loading , conversations} = useGetConversations();
  console.log("Conversations", conversations)
  // useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto ">
      {conversations.map((conversation) => ( <Conversation key={conversation._id} conversation={conversation}
      emoji={getRandomEmoji()}
      lastIdx={conversations.length - 1}
      />))}

      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
      {/* <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation /> */}
    </div>
  );
};

export default Conversations;


// STARTER CODE 

// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto ">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
