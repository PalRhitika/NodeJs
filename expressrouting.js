const express=require("express");

const app=express();

app.get("/:name",(req,res)=>{
    const names= req.params.name;
    res.send(`Welcome to the homepage ${names}` )
})


app.listen(3000, ()=>{
    console.log("app listening at port 3000");
})