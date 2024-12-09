import { useState , useEffect} from 'react';
import QuestionList from '../components/QuestionList';
import StudentList from '../components/StudentList';

export default function Panel() {
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || []);
    const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);


    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions));
        localStorage.setItem('students', JSON.stringify(students));
    }, [questions, students]);

    return (
        <div style={{'padding': '50px 100px'}}>
            <QuestionList questions={questions} setQuestions={setQuestions} />
            <StudentList students={students} setStudents={setStudents} />
        </div>
    )
}