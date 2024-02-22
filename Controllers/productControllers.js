import Product from "../model/productSchema.js"
const getProducts = async (req,res)=>{
    
    try{

        const products = await Product.find({title:"Macbook Pro"});
        res.send(products);
        
    }catch(err){
console.log(err);
res.send("an error occured")
    }
}

 const postProducts = async (req,res)=>{

  const title = req.body.title;
 const  price = req.body.price;
  const description = req.body.description;
 const  category  = req.body.category;
 const  image = req.body.image;
    try{
 await Product.create({title,price,description,category,image});
res.send("product added")
    }catch(err){
        console.log(err);
        res.send("an error occured")
    }
}

export { getProducts ,postProducts}