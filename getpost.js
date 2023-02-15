const express=require("express");

const app=express();

app.listen(3000,()=>{
console.log(`Server started listening to the port 3000.`);

})

app.get("/home",(req,res)=>{
	res.send("Welcome to the home page of Rhitika.");
})	

app.post("/home",(req,res)=>{
	console.log("You just made a post request");
}) 