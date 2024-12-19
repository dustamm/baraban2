import React, { useState, useEffect } from 'react';
import './App.css';
import CustomWheel from './components/CustomWheel';
import Header from './components/Header/Header';
import AnimatedStudentRandomiser from './components/animRandom/randomiser';


const App = () => {
  const [spinnedQuestion, setSpinnedQuestion] = useState("");
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || []
  );
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [remainingStudents, setRemainingStudents] = useState([...students]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [opacity, setOpacity] = useState("0");
  const [bg] = useState(JSON.parse(localStorage.getItem('bg')))

  const root = document.getElementById('body')
  root.style.backgroundImage = bg === 0 ? 'url("/mountain.jpg")' : 'url("/procc.avif")'

  useEffect(() => {
    if (spinnedQuestion) {
      setOpacity("100%");
    }
  }, [spinnedQuestion]);

  const pickRandomStudent = () => {
    if (remainingStudents.length === 0) {
      setRemainingStudents([...students]);
    }

    const randomIndex = Math.floor(Math.random() * remainingStudents.length);
    const chosenStudent = remainingStudents[randomIndex];

    setSelectedStudent(chosenStudent);
    console.log(chosenStudent)
    setRemainingStudents((prev) =>
      prev.filter((student) => student !== chosenStudent)
    );
  };


  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row d-flex align-items-center">
          {/* Wheel on the left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <CustomWheel
              setQuestion={setSpinnedQuestion}
              onSpin={pickRandomStudent} 
              segments={questions}
            />
          </div>

          {/* Spinned question on the right */}
          <div
            className="col-md-6"
            style={{ opacity: opacity, transition: "all 0.3s" }}
          >
            <div className="p-4   shadow text-white ques-bara">
              <p className="fs-4 fw-bold text-white text-center">
                {spinnedQuestion || "Spin the wheel to see your question!"}
              </p>
            </div>
            <AnimatedStudentRandomiser selectedStudent={selectedStudent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;