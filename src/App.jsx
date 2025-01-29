import { useState, useEffect } from "react"
import "./App.css"
import * as studentService from "./services/studentService"

const App = () => {

  const [students, setStudents] = useState([])
  const [refresh,setRefresh] = useState(true)

  const fetchAllStudent = async () => {
    const studentData = await studentService.index()

    setStudents(studentData);

  }

  
  useEffect(() => {
    
    fetchAllStudent()

  }, [refresh])

const handleDelete = async (id) => {
  await studentService.deleteStudent(id)
setRefresh(!refresh)
}

  return (
    <>
      <h1>Fetch All the Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id} >
            {student.name}
            <button onClick={() => handleDelete(student._id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
