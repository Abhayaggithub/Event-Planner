import mongoose from "mongoose";


export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{dbName:"Event_Message"})
    .then(()=>{
        console.log("Connected to Database")
    })
    .catch((err)=>{
        console.log("Some Error occured while connecting to databse",err)
    });
};