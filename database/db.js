import mongoose from "mongoose";


const DBConnection = async()=>{
    const MONODB_URI=`mongodb+srv://nowmailshivamkumar:222225555@file-sharing.bv6w8ju.mongodb.net/?retryWrites=true&w=majority`;
    try{
 await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
console.log("database connected successfully");

    } catch (error){
        console.error('Error while connection with the database',error.message);
    }
}
export default DBConnection;