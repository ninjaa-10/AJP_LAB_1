const mongoose=require("mongoose")
const FacultySchema=new mongoose.Schema({
    name:String,
    age:Number,
    Department:String
});
module.exports=mongoose.model("Faculty",FacultySchema);