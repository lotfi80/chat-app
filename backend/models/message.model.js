import mongosse from 'mongoose';

const messageSchema = new mongosse.Schema({
      senderId:{
            type: mongosse.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      receiverId:{
            type: mongosse.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      message: {
            type: String,
            required: true
      }
 // created at and updated at will be added automatically
}, {timestamps: true});

const Message = mongosse.model('Message', messageSchema);
export default Message;