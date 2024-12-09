import React, { useState } from 'react';

const StudentList = ({ students, setStudents }) => {
  const [newStudent, setNewStudent] = useState('');

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent.trim()]);
      setNewStudent('');
    }
  };

  return (
    <div className="col-md-4">
      <h3>Студенты</h3>
      <input
        type="text"
        className="form-control mb-2"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
        placeholder="Введите имя студента"
      />
      <button onClick={addStudent} className="btn btn-primary mb-2">
        Добавить
      </button>
      <ul className="list-group mb-4">
        {students.map((student, index) => (
          <li key={index} className="list-group-item">
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
