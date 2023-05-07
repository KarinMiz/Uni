import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/Connection/SignInPage";
import RegistrationPage from "./pages/Connection/RegistrationPage";
import DirectorsPage from "./pages/DirectorPages/DirectorsPage";
import TeachersManagement from "./pages/DirectorPages/TeachersManagement";
import StudentsManagement from "./pages/DirectorPages/StudentsManagement";
import ChangingLists from "./pages/DirectorPages/ChangingLists";
import CoursesDisplay from "./pages/DirectorPages/CoursesDisplay";
import axios from "axios";
import TeacherPage from "./pages/TeacherPages/TeacherPage";

export const UserContext = createContext({
  currentUser: '',
  setCurrentUser: ()=> {},
});

function App() {
  const apiUrl = "http://localhost:8080/currentUser";

  const [currentUser, setCurrentUser] = useState({});
  const value = useMemo(
    () => ({ currentUser, setCurrentUser }), 
    [currentUser]
  );
  const checkSession = async () => {
    try {
      const res = await axios.get(apiUrl, { withCredentials: true });
      console.log(res.data);
      setCurrentUser({
        id: res.data.id,
        name:res.data.name,
        role: res.data.role,
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <UserContext.Provider value={value} >
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/directorsPage" element={<DirectorsPage />} />
            <Route path="/teacherManagement" element={<TeachersManagement />} />
            <Route path="/studentManagement" element={<StudentsManagement />} />
            <Route path="/changingLists" element={<ChangingLists />} />
            <Route path="/coursesDisplay" element={<CoursesDisplay />} />
            <Route path="/teachersPage" element={<TeacherPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider >
  );
}

export default App;
