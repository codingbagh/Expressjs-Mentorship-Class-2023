import express from 'express'
import { GetUser, PostUser } from '../Controllers/userControllers.js';


 const userRouter = express.Router();

userRouter.get('/', GetUser)

userRouter.post('/postUser',PostUser)

export {userRouter as default}