import React, { useState, useEffect } from 'react';
import './App.css';
import CustomWheel from './components/CustomWheel';
import Header from './components/Header/Header';

let segments = [
  { segmentText: 'Option 1', segColor: 'red' },
  { segmentText: 'Option 2', segColor: 'blue' },
  { segmentText: 'Option 4', segColor: 'green' },
  { segmentText: 'Option 5', segColor: 'red' },
  { segmentText: 'Option 6', segColor: 'blue' },
  { segmentText: 'Option 7', segColor: 'green' },
  { segmentText: 'Option 8', segColor: 'red' },
  { segmentText: 'Option 9', segColor: 'blue' },
  { segmentText: 'Option 10', segColor: 'green' },
  { segmentText: 'Option 11', segColor: 'red' },
  { segmentText: 'Option 12', segColor: 'blue' },
  { segmentText: 'Option 13', segColor: 'green' },
  { segmentText: 'Option 14', segColor: 'red' },
  { segmentText: 'Option 15', segColor: 'blue' },
  { segmentText: 'Option 16', segColor: 'green' },
  { segmentText: 'Option 17', segColor: 'green' },
  // Add more segments as needed
]

const App = () => {
  const [spinnedQuestion, setSpinnedQuestion] = useState('')
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || []);

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row d-flex align-items-center">
          {/* Wheel on the left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <CustomWheel setQuestion={setSpinnedQuestion} segments={questions} />
          </div>

          {/* Spinned question on the right */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow">
              <h2 className="mb-3 text-primary">Question:</h2>
              <p className="fs-4 fw-bold text-dark">{spinnedQuestion || 'Spin the wheel to see your question!'}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
