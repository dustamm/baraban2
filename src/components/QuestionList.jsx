import React, { useState } from 'react';

function getRandomColor() {
  // Generate a random hex color by picking random values for R, G, and B
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const QuestionList = ({ questions, setQuestions }) => {
  const [newQuestion, setNewQuestion] = useState('');

  const addQuestion = () => {
  
    if (newQuestion.trim()) {
      setQuestions([...questions, { segmentText: newQuestion.trim(), segColor: getRandomColor()}]);
      setNewQuestion('');
    }
  };

  return (
    <div className="col-md-4">
      <h3>Вопросы</h3>
      <input
        type="text"
        className="form-control mb-2"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Напишите вопрос"
      />
      <button onClick={addQuestion} className="btn btn-primary mb-2">
        Добавить
      </button>
      <ul className="list-group mb-4">
        {questions.map((question, index) => (
          <li key={index} className="list-group-item bg-secondary text-white">
            {question.segmentText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
