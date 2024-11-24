import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
      try{
            const loggedInUserId = req.user._id;
            const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password" ); // $ne means not equal 
            //to get all users except the logged in user // select("-password") to exclude password from the response
            return res.status(200).json( filteredUsers );

      }
      catch (err) {
            console.error("Error in getUsersForSidebar controller: ", err);
            res.status(500).json({ message: "Internal server error" });
      }
};