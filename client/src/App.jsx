import './App.css'
import Nav from './components/Nav'
import { Routes, Route, } from 'react-router-dom'
import TeachTable from './components/TeachersTable'
import StudTable from './components/StudentsTable'
import Teachers from './components/Teachers'
import Main from './components/Main'
import Students from './components/Students'


function App() {
  
  return (
    <>
        <Nav />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/teacher" element={<TeachTable/>} />
          <Route path="/add/teacher" element={<Teachers/>} />
          <Route path="/student" element={<StudTable/>} />
          <Route path="/add/student" element={<Students/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
