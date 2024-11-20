import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const generateTokenAndSetCookie = (userId, res) => {
      const token = jwt.sign({userId}, process.env.JWT_SECRET, { 
        expiresIn: '1d' 
      }); 
      res.cookie('jwt', token, {
        httpOnly: true, // to prevent XSS attacks
        maxAge: 24 * 60 * 60 * 1000 ,// 1 day
        sameSite: 'strict', // to prevent CSRF attacks cros sites request forgery
        secure : process.env.NODE_ENV !== 'development' ,
      });

};
export default generateTokenAndSetCookie;