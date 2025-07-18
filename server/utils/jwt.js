/*
  FileName: jwt.js
  Name: Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/07/14
*/

import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username,
            //admin role
            role: user.role
        }, 
        process.env.JWT_SECRET, 
        {
            expiresIn: '1h'
        }
    );
}

export default generateToken;