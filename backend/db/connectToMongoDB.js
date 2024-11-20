import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToMongoDB = async () => {
      try {
      const response = await mongoose.connect(process.env.MONGODB_URI, {
          
      });
      console.log(`MongoDB connected: ${response.connection.host}`);
      } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
      }
      };

      export default connectToMongoDB;