import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import QuestionList from '../QuestionList';
import StudentList from '../StudentList';
import './groupCard.css';

export default function GroupCard({ group, updateGroup }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState(group.questions || []);
  const [students, setStudents] = useState(group.students || []);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const apply = () => {
    localStorage.setItem('questions', JSON.stringify(questions))
    localStorage.setItem('students', JSON.stringify(students))
    setIsModalOpen(false)
    window.location.reload()
  }
  useEffect(() => {
    const updatedGroup = { ...group, questions, students };
    updateGroup(updatedGroup);
  }, [questions, students, group, updateGroup]);

  return (
    <>
      <div className="card" onClick={openModal}>
        <h4>{group.name}</h4>
      </div>
      <Modal show={isModalOpen} title={group.name} handleClose={closeModal} handleApply={apply}>
        <QuestionList questions={questions} setQuestions={setQuestions} />
        <StudentList students={students} setStudents={setStudents} />
      </Modal>
    </>
  );
}
