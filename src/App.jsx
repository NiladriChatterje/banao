import { Navbar, Home, Event, Article, Education, Job } from './Component'
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
        <Route path={'/Article'} element={<Article />} />
        <Route path={'/Event'} element={<Event />} />
        <Route path={'/Education'} element={<Education />} />
        <Route path={'/Job'} element={<Job />} />
      </Routes>
    </div>
  )
}

export default App