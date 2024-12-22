import React, { useState } from 'react';

const StudentList = ({ students, setStudents, showForm = true }) => {
  const [newStudent, setNewStudent] = useState('');

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent.trim()]);
      setNewStudent('');
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="col-md-4" style={{ 'width': '100%' }}>
      <h3>Студенты</h3>
      {showForm && (
        <>
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
        </>
      )}

      <ul className="list-group mb-4">
        {students.map((student, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {student}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteStudent(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
