const express=require("express");

const app=express();

app.listen(3000,()=>{
console.log(`Server started listening to the port 3000.`);

})

app.use((re,res,next)=>{
    console.log("This is middleware example.")
    next()
})

app.get("/home",(req,res)=>{
	res.send("Welcome to the home page of Rhitika.");
})	

app.get("/about",(req,res)=>{
	res.send("Welcome to Rhitika's about page.");
}) 