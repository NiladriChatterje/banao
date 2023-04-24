import { useState } from 'react';
import { Navbar, Home } from './Component'
import './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
