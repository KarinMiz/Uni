import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/pages/HomePage/HomePage"
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
