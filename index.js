import express from 'express';
import productRouter from './routers/productRoute.js';
import "./model/db.js";
import userRouter from './routers/userRegistration.js';
import cors from 'cors'


const server = express();
server.use(express.json());
server.use(cors())

server.use('/api/products',productRouter)
server.use('/api/users',userRouter)

const port = 8080;


server.listen(port,()=>console.log(`server running on ${port}`))

