const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const studentRoutes=require("./routes/studentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const app=express();
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/6csn1")
.then(()=>console.log("mongoDB connected"))
 .catch(err=>{console.log(err)});
app.use("/api",studentRoutes);
app.use("/api", facultyRoutes);
app.listen(3000,()=>{
    console.log("server running on port 3000");
});