import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage"
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/Connection/SignInPage';
import RegistrationPage from './pages/Connection/RegistrationPage';
import TeachersManagement from './pages/DirectorPages/TeachersManagement';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/regist" element={<RegistrationPage />} />
            <Route path='/teachersManage' element={<TeachersManagement/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
