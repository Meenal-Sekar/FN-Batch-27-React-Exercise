
const S1 = require("../model/student");  // model----> controller---->router


const createStudent = async (req, res, next) => {
  try {
    const student = await S1.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });

  } catch (error) {
    next(error);
  }
};

// GET ALL STUDENTS
const getStudents = async (req, res, next) => {
  try {

    const jack = await S1.find(); 

    res.status(200).json({
      success: true,
      count: jack.length,
      data: jack
    });

  } catch (error) {
    next(error);
  }
};


//// GET SINGLE STUDENT
const getStudentById = async (req, res, next) => {
  try {

    const rose = await S1.findById(req.params.id);

    if (!rose) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: rose
    });

  } catch (error) {
    next(error);
  }
};


// UPDATE STUDENT
const updateStudent = async (req, res, next) => {
  try {

    const student = await S1.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {
    next(error);
  }
}





// DELETE STUDENT
const deleteStudent = async (req, res, next) => {
  try {

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Student record deleted successfully"
    });

  } catch (error) {
    next(error);
  }
};



module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};