const express=require("express");
const mongoose=require("mongoose")

const app=express();
const TestSchema=require("./modules/first")
mongoose.set("strictQuery", false);


mongoose.connect('mongodb://localhost/testDB',{family:4}).then(()=>console.log('connected to db'))
.catch((e)=> console.log('error',e));


app.get("/:names/:age",(req,res)=>{
    const {names, age}= req.params;

    const newData=new TestSchema({names,age})
    newData.save().then(()=>{console.log("data added successfully")}).catch((err)=>{
        console.log(err)
    })
    res.send(`your name is ${names} and your age is ${age}`);
})
    
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})