import React, {useState} from "react";
import Draggable from "react-draggable";
import cvPdf from '../downloadables/cv.pdf';
import { changeVisibility } from "./Visibility";



function Skills() {


    return(
        <div className="multipleBoxesContainer" id="skillsContainer">  
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent">
                        <div className='boxHeader handle'>
                            <h2>Technologies</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e)=>{changeVisibility(e, 'c1', 'h')}}>_</button>
                                <button className='box' onClick={(e)=> {changeVisibility(e, 'c1')}}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div id="c1" className="flexCol"> 
                            <ul>
                                <li>
                                Html, CSS, Javascript - my bread and butter
                                </li>
                                <li>
                                React - I’m learning this currently, I’ve finished a course on this and this site uses it
                                </li>
                                <li>
                                Firebase - the backend and hosting tool I usually use for my projects
                                </li>
                                <li>
                                PHP - I’ve used this quite a lot, with Wordpress also
                                </li>
                                <li>
                                SQL - I’ve often used this with PHP, I’ve used MySQL and PHPmyAdmin
                                </li>
                                <li>
                                JSON - I’ve used this with Firebase and with several APIs
                                </li>
                                <li>
                                Python - I’ve finished a basics course with this and used it in a project, though it’s not my favourite languages
                                </li>
                                <li>
                                Bootstrap - I’ve used this and similar React libraries (React Grid) a few times
                                </li>
                                <li>
                                Wordpress - I’ve manually modified the PHP files for UI styles and I’ve built simple sites with it
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
                    </div>
                </Draggable>
            </div>
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent">
                        <div className='boxHeader handle'>
                            <h2>Software</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e)=>{changeVisibility(e, 'c2', 'h')}}>_</button>
                                <button className='box' onClick={(e)=> {changeVisibility(e, 'c2')}}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div id="c2" className="flexCol">
                            <ul>
                                <li>
                                Unity - 360 image  environments to a website, simple games
                                </li>
                                <li>
                                OBS - Streaming events like Metropolia 10 year anniversary
                                </li>
                                <li>
                                Photoshop - basic skills, I can do simple editing but I’ve finished a more advanced course too, so I can learn more advanced things if needed
                                </li>
                                <li>
                                Premier Rush, Pro - same as with Photoshop
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
                    </div>
                </Draggable>
            </div> 
        </div>
        
    );
}

export default Skills;