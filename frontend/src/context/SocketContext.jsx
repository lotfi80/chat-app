import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import  io  from "socket.io-client";

const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5001", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
      // socket.on is used to listen to the event , can be used on both client and server
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
// import { createContext, useState, useEffect, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// // Create SocketContext
// const SocketContext = createContext();

// // Custom Hook to Consume SocketContext
// export const useSocketContext = () => useContext(SocketContext);

// // Socket Context Provider
// export const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { authUser } = useAuthContext();

//   useEffect(() => {
//     // Check if authUser is present before connecting
//     if (authUser?._id) {
//       const socketInstance = io("http://localhost:5001", {
//         query: { userId: authUser._id },
//         withCredentials: true, // Ensure cross-origin credentials are passed
//       });

//       setSocket(socketInstance);

//       // Listen for the online users event
//       socketInstance.on("getOnlineUsers", (users) => {
//         setOnlineUsers(users);
//       });

//       // Cleanup function
//       return () => {
//         socketInstance.disconnect(); // Disconnect socket
//         setSocket(null); // Clear socket state
//       };
//     } else {
//       // Cleanup socket if authUser logs out
//       if (socket) {
//         socket.disconnect();
//         setSocket(null);
//       }
//     }
//   }, [authUser]); // Re-run if authUser changes

//   return (
//     <SocketContext.Provider value={{ socket, onlineUsers }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };
