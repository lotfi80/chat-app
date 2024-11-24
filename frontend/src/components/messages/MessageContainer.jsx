import React, { useEffect } from 'react'
import Messages from './Messages'
import MessagesInput from './MessagesInput'
import { TiMessages } from 'react-icons/ti'
import useconversation from '../../zustand/useconversation'

const MessageContainer = () => {
 const {selectedConversation, setSelectedConversation} = useconversation()

 useEffect(() => {
  return ()=> setSelectedConversation(null)
 }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected/> : (
               <>
               {/* Header */}
               <div className='bg-slate-500 px-4 py-2 mb-2 '>
                    <span className='label-text'>To</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
               </div>
               {/* Messages */}
               <Messages/>
               <MessagesInput/>
         
               
               </>
      )}
   
      
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
      items-center gap-2'>
                  <p className='text-gray-500'>Welcome Lotfi Slim</p>
                  <p>select a chat to start messaging</p>
                  <TiMessages className='text-3xl md:text-6xl text-center'/>

      </div>
    </div>
  )
}

export default MessageContainer

// STARTER CODE

// import Messages from './Messages'
// import MessagesInput from './MessagesInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       <>
//       {/* Header */}
//       <div className='bg-slate-500 px-4 py-2 mb-2 '>
//            <span className='label-text'>To</span> <span className='text-gray-900 font-bold'>Isabelle Planchon</span>
//       </div>
//       {/* Messages */}
//       <Messages/>
//       <MessagesInput/>

      
//       </>
      
//     </div>
//   )
// }

// export default MessageContainer