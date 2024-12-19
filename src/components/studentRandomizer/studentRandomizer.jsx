import React, { useState, useEffect } from "react";
import './styles.css'

const StudentRandomiser = ({ students }) => {
  const [usedNums, setUsedNums] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [nonActiveIndices, setNonActiveIndices] = useState([]);

  // Function to start the random selection
  const startRandomiser = () => {
    let randomNum = Math.floor(Math.random() * students.length);
    
    if (usedNums.length === students.length) {
      setUsedNums([]);
      setNonActiveIndices([]);
    }

    // Ensure a unique random number is selected
    while (usedNums.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * students.length);
    }

    // Update used numbers
    setUsedNums((prev) => [...prev, randomNum]);
    setNonActiveIndices((prev) => [...prev, randomNum]);

    let count = 0;
    let loop = 0;

    const interval = setInterval(() => {
      if (count === students.length) {
        count = 0;
      }
      if (count === students.length - 1) {
        loop++;
      }
      if (loop === 3 && count === randomNum) {
        clearInterval(interval);
      }
      setActiveIndex(count);
      count++;
    }, 50);
  };

  return (
    <div>
      <ul className="students-container list-group">
        {students.map((_, ind) => (
          <li
            key={ind}
            className={`list-group-item student-item ${
              activeIndex === ind ? "active-student" : ""
            } ${nonActiveIndices.includes(ind) ? "nonActive" : ""}`}
          >
            {ind + 1}
          </li>
        ))}
      </ul>
      <button id="startStudentsSpin" onClick={startRandomiser}>
        Start Spin
      </button>
    </div>
  );
};

export default StudentRandomiser;
