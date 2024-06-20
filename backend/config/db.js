import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://devyanshim6:Dp220028@cluster0.wrafhbc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}