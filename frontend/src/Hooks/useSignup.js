import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const succes = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!succes) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      if (!res.ok) {
        const errorMessage = await res.text(); // Use text to get any plain-text response
        throw new Error(errorMessage || "An error occurred while signing up.");
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //localestorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context

      setAuthUser(data);

      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields .");

    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password do not match .");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters .");
    return false;
  }
  return true;
}
