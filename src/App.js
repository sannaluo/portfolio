import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


import About from './content/About';
import NotFound from "./content/NotFound";
import Projects from "./content/Projects";
import Skills from './content/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div id='navContainer' className='box'>
            <div className='boxHeader'>
              <h1>Sanna Luostarinen</h1>
              <div className='boxButtons'>
                <div className='box'>_</div>
                <div className='box'>□</div>
                <div className='box'>x</div>
              </div>
            </div>
            <nav>
              <Link to="/about" className='box'>About</Link>{' '}
              <Link to="/projects" className='box'>Projects</Link>{' '}
              <Link to="/skills" className='box'>Skills</Link>{''}
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
