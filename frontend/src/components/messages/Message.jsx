import { useAuthContext } from "../../context/AuthContext";
import useconversation from "../../zustand/useconversation";
import { extractTime } from "../../utils/extractTime";


const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useconversation();
  const fromMe = message.senderId === authUser._id;
  const formDateTime = extractTime(message.createdAt);
  const ChatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe
    ? authUser.profilePicture
    : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${ChatClassName} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind css chat cuccle component"
            src={profilePicture}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs fleyx gap-1 items-center">
        {formDateTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//             <div className="w-10 rounded-full ">
//                   <img alt='Tailwind css chat cuccle component'
//                    src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"}  />

//             </div>

//       </div>
//       <div className={`chat-bubble text-white bg-blue-500`}>
// Hi ! Whatts upp ?
//       </div>
//       <div className="chat-footer opacity-50 text-xs fleyx gap-1 items-center">12:42
//       </div>

//     </div>
//   )
// }

// export default Message
