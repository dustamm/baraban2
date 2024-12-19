import { useState, useEffect } from 'react';
import GroupCard from '../components/groupCard/GroupCard';
import AddGroupForm from '../components/addGroupForm/addGroupForm';
import QuestionList from '../components/QuestionList';
import StudentList from '../components/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PanelStyles.css';

export default function Panel() {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || []);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (name) => {
    const newGroup = { name, students: [], questions: [] };
    setGroups([...groups, newGroup]);
  };

  const updateGroup = (updatedGroup) => {
    setGroups(groups.map((group) => (group.name === updatedGroup.name ? updatedGroup : group)));
  };

  const setBgFn = (bg) => {
    const root = document.getElementById('body');
    if (bg === 0) {
        root.style.backgroundImage = "url('/mountain.jpg')";
        localStorage.setItem('bg', JSON.stringify(0))

    } else {
        root.style.backgroundImage = 'url(/procc.avif)';
        localStorage.setItem('bg', JSON.stringify(1))

    }
};


  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <QuestionList questions={questions} setQuestions={setQuestions} showForm={false} />
          <StudentList students={students} setStudents={setStudents} showForm={false}/>
          <button className=" btn-bg bg-one"  onClick={() => setBgFn(0)}></button>
            <button className=" btn-bg bg-two"  onClick={() => setBgFn(1)}></button>
        </div>

        <div className="col-md-6">
        <div className="row">
          {groups.map((group, index) => (
            <div key={index} className="col-md-6 mb-3">
              <GroupCard group={group} updateGroup={updateGroup} />
            </div>
          ))}
        </div>
        <button className="btn btn-success mt-3" onClick={() => setIsModalOpen(true)}>
          Add Group +
        </button>
      </div>

      </div>

      <AddGroupForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddGroup={addGroup}
      />
    </div>
  );
}
