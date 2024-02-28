import mongoose from 'mongoose';

const BootSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    phonenumber:String,
    gender:String,
    ecb:String,
    he:String
})

const Bootcamp = mongoose.model('Bootcamp', BootSchema);

export {Bootcamp}