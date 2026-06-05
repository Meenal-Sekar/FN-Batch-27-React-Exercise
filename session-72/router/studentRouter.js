

const express=require('express')

const router = express.Router();    //Router level middleware statement

const{createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent} =require('../controller/studentController')

router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:id", getStudentById);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);


module.exports=router;