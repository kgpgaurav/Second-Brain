import {model, Model} from "mongoose";
import mongoose from "mongoose";
const Schema= mongoose.Schema;

mongoose.connect("mongodb+srv://kgp:bgI0Qdc2LlyGmJPM@cluster0.udvik.mongodb.net/brainly")

const ObjectId= Schema.Types.ObjectId;

const userSchema= new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

export const UserModel= mongoose.model("User", userSchema);

const contentSchema= new Schema({
    title: String,
    link: String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId: {type:mongoose.Types.ObjectId, ref:'User', required:true}

})

export const ContentModel= mongoose.model("Content", contentSchema);

const LinkSchema= new Schema({
    hash: String,
    userId: {type:mongoose.Types.ObjectId, ref:'User', required:true}
})
export const LinkModel= mongoose.model("Links", LinkSchema);