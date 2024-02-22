import express from 'express';
import productRouter from './routers/productRoute.js';
import "./model/db.js";

const server = express();
server.use(express.json());

server.use('/api/products',productRouter)

const port = 8080;


server.listen(port,()=>console.log(`server running on ${port}`))

