const fs= require("fs");

fs.open("test.txt","w",err =>{
    if(err) throw err;
    else{
    console.log("File created successfully.");
    }
})

fs.writeFile("test.txt","Hello this is written by Rhitika.", err=>{
    if(err) throw err;
    else{
        console.log("File written successfully.");
    }
})

// fs.appendFile("test.txt","Hello this is  another line of text written by Rhitika.", err=>{
//     if(err) throw err;
//     else{
//         console.log("File appended successfully.");
//     }
// })

// fs.readFile("test.txt",'utf-8',(err, data)=>{
//     if(err) throw err;
//     else{
//         console.log("File read successfully.");
//         console.log(data);
//     }
// })
// fs.unlink("test.txt", err=>{
//     if(err) throw err;
//     else{
//         console.log("File deleted successfully.");
//     }
// })