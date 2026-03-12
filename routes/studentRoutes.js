const express=require("express")
const router=express.Router();
const Student=require("../models/Students");
router.post("/students",async(req,res)=>{
    const student=new Student(req.body);
    await student.save();
    res.send(student);
})
router.get("/students",async(req,res)=>{
    const student=await Student.find();
    res.send(student);
})
module.exports=router;