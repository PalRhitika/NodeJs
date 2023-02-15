const express=require("express");
const mongoose=require("mongoose");


const app=express();
mongoose.set("strictQuery", false);


mongoose.connect('mongodb://localhost/testDB',{family:4}).then(()=>console.log('connected to db'))
.catch((e)=> console.log('error',e));



app.get("/",(req,res)=>{
    res.send("Welcome to homepage.");
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000.");
})