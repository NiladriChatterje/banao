import { Navbar, Home } from './Component'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [modalToggle, setModalToggle] = useState(() => false);
  const [toggle, setToggle] = useState(() => true);
  return (
    <div className="App">
      <Navbar setModalToggle={setModalToggle} setToggle={setToggle} />
      <Routes>
        <Route path={'/'} element={<Home modalToggle={modalToggle} setModalToggle={setModalToggle}
          toggle={toggle} setToggle={setToggle} />} />
      </Routes>
    </div>
  )
}

export default App
