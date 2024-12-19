import React from "react";
import "./styles.css"; // Import CSS for styling

const AnimatedStudentRandomiser = ({ selectedStudent }) => {
  return (
    <h1 className="text-center mt-5 fw-bold text-white">
         {selectedStudent}
      </h1>
  );
};

export default AnimatedStudentRandomiser;
