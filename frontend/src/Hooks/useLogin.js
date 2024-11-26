import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import dotenv from "dotenv";
dotenv.config();


const useLogin = () => {
 const [loading , setLoading] = useState(false);
 const {setAuthUser} = useAuthContext();
 const login = async ({username,password})=>{
      const succes = handleInputError({
            
            username,
            password,
            
          });
          if (!succes) return;
       setLoading(true)
       try{
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const res = await fetch(`${baseUrl}/api/auth/login`, {
                  method: "POST",
                   headers: {
                         "Content-Type": "application/json",
                   },
                   credentials: "include",
                   body: JSON.stringify({username,password})
             })
             
             if(!res.ok){
                   const errorMessage = await res.text()
                   throw new Error(errorMessage || "An error occurred while logging in.")
             }
             const data = await res.json()
             if(data.error){
                   throw new Error(data.error)
             }
             localStorage.setItem("chat-user",JSON.stringify(data))
                  setAuthUser(data)
       }
       catch(error){
             toast.error(error.message)
       }
       finally{
             setLoading(false)
       }
 }
 return {loading,login}
}

export default useLogin

function handleInputError({ username, password }) {
      if ( !username || !password ) {
        toast.error("Please fill all fields .");
    
        return false;
      }
      
      return true;
    }
    
