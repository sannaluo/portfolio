import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Draggable from 'react-draggable';

import About from './content/About';
import NotFound from "./content/NotFound";
import Projects from "./content/Projects";
import Skills from './content/Skills';

import profilePicture from './images/profile-img.jpeg';
import linkedinLogo from './images/In-Blue-128@2x.png';
import githubLogo from './images/github-mark.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Draggable handle=".handle" bounds="body">
            <div id='navContainer' className='box'>
              <div className='boxHeader handle'>
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
          </Draggable>
        </header>
        <main>
          <div id='iconsContainer'>
            <a href={profilePicture}>
              <img src={profilePicture} alt='profile image' className='IconImg' id='profileImg'/>
              Sanna.jpeg
            </a>
            <a href='https://www.linkedin.com/in/sannaluo/'>
              <img src={linkedinLogo} alt='LinkedIn logo' className='IconImg' id='linkedinImg'/>
              LinkedIn
            </a>
            <a href='https://github.com/sannaluo/'>
              <img src={githubLogo} alt="GitHub logo" className='IconImg' id='githubImg'/>
              GitHub
            </a>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div id="backgroundCircle"></div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
