import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Draggable from 'react-draggable';
import { changeVisibility } from './content/Visibility';

import About from './content/About';
import NotFound from "./content/NotFound";
import Projects from "./content/Projects";
import Skills from './content/Skills';
import Interests from './content/Interests';

import profilePicture from './images/profile-img.jpeg';
import linkedinLogo from './images/In-Blue-128@2x.png';
import githubLogo from './images/github-mark.png';
import emailIcon from './images/email.png';

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
                    <button className='box' onClick={(e)=>{changeVisibility(e, 'nav', 'h')}}>_</button>
                    <button className='box' onClick={(e)=> {changeVisibility(e, 'nav')}}>□</button>
                    <button className='box'>x</button>
                </div>
              </div>
              <nav id='nav'>
                <div className='navDivider'>
                  <Link to="/about" className='box'>About</Link>{' '}
                  <Link to="/skills" className='box'>Skills</Link>{' '}
                </div>
                <div className='navDivider'>
                  <Link to="/interests" className='box'>Interests</Link>{' '}
                  <Link to="/projects" className='box'>Projects</Link>{' '}
                </div>
              </nav>
            </div>
          </Draggable>
        </header>
        <main>
          <div id='iconsContainer'>
            <a href={profilePicture}  target='_blank'>
              <img src={profilePicture} alt='profile image' className='IconImg' id='profileImg'/>
              Sanna.jpeg
            </a>
            <a href='https://www.linkedin.com/in/sannaluo/' target='_blank'>
              <img src={linkedinLogo} alt='LinkedIn logo' className='IconImg' id='linkedinImg'/>
              LinkedIn
            </a>
            <a href='https://github.com/sannaluo/' target='_blank'>
              <img src={githubLogo} alt="GitHub logo" className='IconImg' id='githubImg'/>
              GitHub
            </a>
            <a href='mailto: smo.luostarinen@gmail.com'>
              <img src={emailIcon} alt='icon for email' className='IconImg' id='emailImg' />
              Email me
            </a>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/interests' element={<Interests />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div id="backgroundCircle"></div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
