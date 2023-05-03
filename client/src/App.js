import React, { useEffect } from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage"
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/Connection/SignInPage';
import RegistrationPage from './pages/Connection/RegistrationPage';
import DirectorsPage from './pages/DirectorPages/DirectorsPage';
import TeachersManagement from './pages/DirectorPages/TeachersManagement';
import StudentsManagement from './pages/DirectorPages/StudentsManagement';
import ChangingLists from './pages/DirectorPages/ChangingLists';
import CoursesDisplay from './pages/DirectorPages/CoursesDisplay';
import axios from 'axios';

function App() {
  const apiUrl = "http://localhost:8080/currentUser";

  const checkSession = async () => {
    try {
      const res = await axios.get(apiUrl, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    checkSession();
  },[])
  return (
    <div>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/regist" element={<RegistrationPage />} />
            <Route path="/directorsPage" element={<DirectorsPage/>}/>
            <Route path="/teacherManagement" element={<TeachersManagement/>}/>
            <Route path="/studentManagement" element={<StudentsManagement/>}/>     
            <Route path="/changingLists" element={<ChangingLists/>}/>
            <Route path="/coursesDisplay" element={<CoursesDisplay/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
