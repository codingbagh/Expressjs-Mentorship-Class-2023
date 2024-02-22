import mongoose from 'mongoose';

try{
    mongoose.connect('mongodb+srv://coding:vLOTsdR38y8o4Ovu@cluster0.z3gc71x.mongodb.net/codingstore');
    console.log("Connected to MongoDB");

}catch(err){
    console.log(err);
}

