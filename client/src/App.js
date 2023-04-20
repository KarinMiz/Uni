import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage"
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/Connection/SignInPage';
import RegistrationPage from './pages/Connection/RegistrationPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/regist" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
