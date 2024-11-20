import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: rawReceiverId } = req.params;
    const rawSenderId = req.user._id;

    // Validate that the message is provided
    if (!message || message.trim() === "") {
      return res.status(400).json({ message: "Message content is required." });
    }

    // Trim and validate IDs
    const receiverId = rawReceiverId.trim();
    const senderId = rawSenderId.toString().trim();

    // Validate ObjectId format
    if (
      !mongoose.Types.ObjectId.isValid(receiverId) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      return res.status(400).json({ message: "Invalid sender or receiver ID" });
    }

    // Check if conversation exists
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Create new conversation if none exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message: message.trim(), // Ensure message is properly trimmed
    });
    // Add the message to the conversation

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }


    // SOKET IO functionality to be added here

    // await conversation.save();
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (err) {
    console.error("Error in sendMessage controller: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
      try{

   const {id : userToChatId} = req.params;
   const senderId = req.user._id;
   const conversation = await Conversation.findOne({
      participants : {$all: [senderId, userToChatId]}
   }).populate("messages"); // populate the messages field of the conversation
   if (!conversation) {
      return res.status(200).json({ messages: [] });
      }
      const messages = conversation.messages;
   res.status(200).json(messages);

      }
      catch (err) {
            console.error("Error in sendMessage controller: ", err);
            res.status(500).json({ message: "Internal server error" });
      }
};