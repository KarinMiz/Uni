import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage"
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/Connection/SignInPage';
import RegistrationPage from './pages/Connection/RegistrationPage';
import DirectorsPage from './pages/DirectorPages/DirectorsPage';

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
            <Route path='/directorsPage' element={<DirectorsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
