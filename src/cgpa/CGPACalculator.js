import React, { useState } from "react";
import { Trash, Plus } from "lucide-react";

const CGPACalculator = () => {
  const [courses, setCourses] = useState([
    { name: "", creditHours: "", gpa: "" },
  ]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [totalGpa, setTotalGpa] = useState(0);
  const [calculated, setCalculated] = useState(false);

  const getGrade = (gpa) => {
    if (gpa === 4) return "A";
    if (gpa === 3) return "B";
    if (gpa === 2) return "C";
    if (gpa === 1) return "D";
    return "F";
  };

  const handleAddCourse = () => {
    setCourses([...courses, { name: "", creditHours: "", gpa: "" }]);
  };

  const handleRemoveCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleCalculate = () => {
    let totalCreditHours = 0;
    let totalGpa = 0;
    courses.forEach((course) => {
      totalCreditHours += Number(course.creditHours);
      totalGpa += Number(course.creditHours) * Number(course.gpa);
    });
    const cgpa = totalGpa / totalCreditHours;
    setTotalCreditHours(totalCreditHours);
    setTotalGpa(cgpa);
    setCalculated(true);
  };

  const handleReset = () => {
    setCourses([{ name: "", creditHours: "", gpa: "" }]);
    setTotalCreditHours(0);
    setTotalGpa(0);
    setCalculated(false);
  };

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">CGPA Calculator</h2>
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={handleAddCourse}>
          <Plus className="mr-2" />
          Add Course
        </button>
      </div>
      {courses.map((course, index) => (
        <div key={index} className="row mb-2 align-items-center">
          <div className="col-md-5">
            <input
              type="text"
              value={course.name}
              onChange={(e) =>
                handleCourseChange(index, "name", e.target.value)
              }
              placeholder="Course Name"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              value={course.creditHours}
              onChange={(e) =>
                handleCourseChange(index, "creditHours", e.target.value)
              }
              placeholder="Credit"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              step="0.1"
              value={course.gpa}
              onChange={(e) => handleCourseChange(index, "gpa", e.target.value)}
              placeholder="GPA"
              className="form-control"
            />
          </div>
          <div className="col-md-1 text-end">
            <Trash
              className="text-danger cursor-pointer"
              onClick={() => handleRemoveCourse(index)}
            />
          </div>
        </div>
      ))}
      <div className="row mb-4">
        <div className="col-md-4 text-start">
          <button className="btn btn-success" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
        <div className="col-md-8 text-end">
          <button className="btn btn-danger w-auto" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      {calculated && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Credit Hours</th>
              <th>GPA</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.creditHours}</td>
                <td>{course.gpa}</td>
                <td>{getGrade(Number(course.gpa))}</td>
              </tr>
            ))}
            <tr>
              <td className="fw-bold">Total</td>
              <td className="fw-bold">{totalCreditHours}</td>
              <td className="fw-bold">{totalGpa.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CGPACalculator;
