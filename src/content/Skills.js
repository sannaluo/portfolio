import React from "react";
import Draggable from "react-draggable";
import cvPdf from '../images/cv.pdf';


function Skills() {
    return(
        <div className="multipleBoxesContainer">  
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent">
                        <div className='boxHeader handle'>
                            <h2>Technologies</h2>
                            <div className='boxButtons'>
                                <div className='box'>_</div>
                                <div className='box'>□</div>
                                <div className='box'>x</div>
                            </div>
                        </div>
                        <ul>
                            <li>
                            Html, CSS, Javascript - my bread and butter
                            </li>
                            <li>
                            React - I’m learning this rn, I’ve finished a course on this and my site is built with it
                            </li>
                            <li>
                            Firebase - the backend and hosting tool I usually use for my projects
                            </li>
                            <li>
                            PHP - I’ve used this quite a lot, with Wordpress also
                            </li>
                            <li>
                            SQL - I’ve often used this with PHP, I’ve used MYSQL
                            </li>
                            <li>
                            JSON - I’ve used this with Firebase and with several APIs
                            </li>
                            <li>
                            Python - I’ve finished a basics course with this and used it in a project, though it’s not my favourite languages
                            </li>
                            <li>
                            Bootstrap - I’ve used this and similar React libraries (React Grid?) a few times
                            </li>
                            <li>
                            Wordpress - I’ve manually modified the PHP files for UI styles ???, I’ve studied this briefly in Taitotalo
                            </li>
                            <li>
                            Blender - I’ve made some simple 3D models
                            </li>
                            <li>
                            Three.js - I’ve used this to bring the 3D models to a website
                            </li>

                        </ul>
                        <a className="box cornerRightButton" href={cvPdf} download="Sanna_Luostarinen_cv" >Download my CV</a>
                    </div>
                </Draggable>
            </div>
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent">
                        <div className='boxHeader handle'>
                            <h2>Software</h2>
                            <div className='boxButtons'>
                                <div className='box'>_</div>
                                <div className='box'>□</div>
                                <div className='box'>x</div>
                            </div>
                        </div>
                        <ul>
                            <li>
                            Unity - 360 image  environments to a website, simple games
                            </li>
                            <li>
                            OBS - Streaming events like Metropolia 10 year anniversary
                            </li>
                            <li>
                            Photoshop - basic skills, I can do simple editing but I’ve done a more advanced course so I can learn more advanced things if needed
                            </li>
                            <li>
                            Premier Rush, Pro - same as with photoshop
                            </li>
                            <li>
                            I’ve also briefly used InDesing and Illustrator, I can also learn to use them again if needed
                            </li>
                            <li>
                            GIMP - same as with Photoshop
                            </li>
                            <li>
                            WinSCP - for retrieving files and for manually editing Wordpress PHP files
                            </li>
                            <li>
                            For wireframes, layouts: Marvel App, MS Powerpoint, draw.io
                            </li>
                            <li>
                            For project management: Trello, Github, Confluence
                            </li>
                            <li>
                            IDEs I’ve used: PHPStorm, VS code
                            </li>
                            <li>
                            OS I’m used to: Windows, on mobile Android (Samsung)
                            </li>
                        </ul>
                    </div>
                </Draggable>
            </div> 
        </div>
        
    );
}

export default Skills;