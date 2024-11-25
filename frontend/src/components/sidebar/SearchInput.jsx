// import { IoSearchSharp } from "react-icons/io5";
// import { useState } from "react";
// import useConversation from "../../zustand/useconversation";
// import useGetConversations from "../../Hooks/useGetConversations";
// import toast from "react-hot-toast";


// const SearchInput = () => {
//       const [search, setSearch] = useState('')
//       const {setSelectedConversation} = useConversation()
//       const {conversations } = useGetConversations()

//       const handleSubmit = (e) =>{
//             e.preventDefault()
//          if(!search) return
//          if (search.length < 3) {
//             return toast.error ('Search term must be at least 3 characters long')

//          }
//          const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
//          if (conversation) {
//                 setSelectedConversation(conversation)
//                setSearch('')
//          }
//          else {
//                return toast.error('No User found')
//          }
//       }

//   return (
// <form
// onSubmit={handleSubmit}
// action="" className="flex items-center gap-2">
//       <input type="text" placeholder="Search..." className="input input-bordered rounded-full text-black"
//       value={search}
//       onChange={(e)=>setSearch(e.target.value)} />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//             <IoSearchSharp className="w-6 h-6 outline-none" />

//       </button>
// </form>  )
// }

// export default SearchInput

// // starter code 

// // import { IoSearchSharp } from "react-icons/io5";

// // const SearchInput = () => {
// //   return (
// // <form action="" className="flex items-center gap-2">
// //       <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
// //       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
// //             <IoSearchSharp className="w-6 h-6 outline-none" />

// //       </button>
// // </form>  )
// // }

// // export default SearchInput

import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../zustand/useconversation";
import useGetConversations from "../../Hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations(); // Fixed typo

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      return toast.error("Search term cannot be empty.");
    }

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long.");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch(''); // Reset input field
      toast.success(`Conversation with ${conversation.fullName} selected!`);
    } else {
      toast.error("No user found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

