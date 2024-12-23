import React, { useState } from 'react';
import getRandomColor from '../utils/randomColor';

const QuestionList = ({ questions, setQuestions, showForm = true }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newImage, setNewImage] = useState(null);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        {
          segmentText: newQuestion.trim(),
          segColor: getRandomColor(),
          image: newImage, // Save the image URL or file object
        },
      ]);
      setNewQuestion('');
      setNewImage(null); // Reset image input
    }
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImage(event.target.result); // Set the base64-encoded image data
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-md-4" style={{ width: '100%' }}>
      <h3>Саволхо</h3>
      {showForm && (
        <>
          <input
            type="text"
            className="form-control mb-2"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Саволро нависед"
          />
          <input
            type="file"
            className="form-control mb-2"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button onClick={addQuestion} className="btn btn-primary mb-2">
            Дохил кардан
          </button>
        </>
      )}

      <ul className="list-group mb-4">
        {questions.map((question, index) => (
          <li key={index} className="list-group-item bg-secondary text-white">
            <div className="d-flex align-items-center">
              <div style={{ flex: 1 }}>
                <strong>{question.segmentText}</strong>
                {question.image && (
                  <div className="mt-2">
                    <img
                      src={question.image}
                      alt="Question"
                      style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                )}
              </div>
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => deleteQuestion(index)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
