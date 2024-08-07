import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://hawk_11:Hawk_11@cluster0.irhav.mongodb.net/blog-app')
    console.log("DB connected")
}