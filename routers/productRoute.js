import express from'express'
import { getProducts, postProducts } from '../Controllers/productControllers.js';

 const productRouter = express.Router();

productRouter.get('/', getProducts)

productRouter.post('/postProducts',postProducts)

export {productRouter as default}