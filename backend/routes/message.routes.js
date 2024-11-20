import express from 'express';
import {sendMessage ,getMessages } from '../controllers/message.controller.js';
import  protectRoute  from '../middelware/protectRoute.js';

const router = express.Router();

  router.post('/send/:id', protectRoute, sendMessage); // protectRoute is a middleware to protect the route
  router.get('/:id', protectRoute, getMessages); // protectRoute is a middleware to protect the route

  export default router;
