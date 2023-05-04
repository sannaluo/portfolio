import React from "react";
import Draggable from "react-draggable";

import { changeVisibility } from "./Visibility";
import spaceGameImg from "../images/spacegame-screenshot.png";
import modelViewerImg from "../images/modelviewer-screenshot.png";
import game1img from "../images/game1.png";
import game2img from "../images/game2.png";
import game1zip from "../downloadables/game1.zip";
import game2zip from "../downloadables/game2.zip";

function Projects() {
    return (
        <div className="multipleBoxesContainer" id="projectsContainer">
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" >
                        <div className='boxHeader handle'>
                            <h2>3D projects with Blender and Three.js</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e) => { changeVisibility(e, 'p1', 'h') }}>_</button>
                                <button className='box' onClick={(e) => { changeVisibility(e, 'p1') }}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div className="flexRow projectWrapper" id="p1">
                            <div className="flexCol">
                                <h3>Space game</h3>
                                <img src={spaceGameImg} className="exampleImg"></img>
                                <a href={process.env.PUBLIC_URL + '/demos/spacegame/spaceindex.html'} target="_blank" className="box tryButton">Try it!</a>
                                <a href="https://github.com/sannaluo/SpaceGame" target="_blank">Github docs</a>
                            </div>
                            <div className="flexCol">
                                <h3>3D model viewer</h3>
                                <img src={modelViewerImg} className="exampleImg"></img>
                                <a href={process.env.PUBLIC_URL + '/demos/modelviewer/index.html'} target="_blank" className="box tryButton">Try it!</a>
                                <a href="https://github.com/sannaluo/modelviewer" target="_blank">Github docs</a>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
            <div className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" id="interestsBox">
                        <div className='boxHeader handle'>
                            <h2>Simple Unity games</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e) => { changeVisibility(e, 'p2', 'h') }}>_</button>
                                <button className='box' onClick={(e) => { changeVisibility(e, 'p2') }}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div className="flexRow projectWrapper" id="p2">
                            <div className="flexCol">
                                <h3>Move the ball</h3>
                                <img src={game1img} className="exampleImg"></img>
                                <a className="box cornerRightButton" href={game1zip} download="sanna-game1.zip" >Download the zip</a>
                            </div>
                            <div className="flexCol">
                                <h3>360 image and transitions</h3>
                                <img src={game2img} className="exampleImg"></img>
                                <a className="box cornerRightButton" href={game2zip} download="sanna-game2.zip" >Download the zip</a>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </div>
    );
}


export default Projects;