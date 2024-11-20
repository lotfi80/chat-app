import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture:
        gender === "male" ? boyProfilePicture : girlProfilePicture,
    });
    if (newUser) {
      // Generate a JWT token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({ user: newUser });
    }
  } catch (err) {
    console.log("Error in signup route ", err);
    res.status(500).json({ message: "server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check if the user exists
    const user = await User.findOne({ username });
    // check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    ); // have to add ||"" because user.password is undefined in case user is null
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "invalid user name or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (err) {
    console.log("Error in signup route ", err);
    res.status(500).json({ message: "server error" });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      maxAge: 0,
      sameSite: "strict",
    });
    res.status(200).json({ message: "logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
