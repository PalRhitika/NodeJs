const mongoose= require("mongoose");

const TestSchema=new mongoose.Schema(
    {
        names: String,
        age: String
    }
);

module.exports=new mongoose.model("testschema", TestSchema);