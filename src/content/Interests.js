import React from "react";
import Draggable from "react-draggable";
import { changeVisibility } from "./Visibility";


function Interests() {
    return (
        <div className="multipleBoxesContainer"> 
            <div  className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" id="interestsBox">
                        <div className='boxHeader handle'>
                            <h2>Hobbies and interests</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e)=>{changeVisibility(e, 'i1', 'h')}}>_</button>
                                <button className='box' onClick={(e)=> {changeVisibility(e, 'i1')}}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div className="flexCol" id="i1">
                            <p>Knitting, crocheting, sewing </p>
                            <p>
                            Singing, choir, I’m learning piano and guitar too :)
                            </p>
                            <p>
                            I watch a lot of youtubers and streamers: I find that kind of content creation really interesting, I’m especially into vtubers, game streamers and lifestyle bloggers with craft content
                            </p>
                            <p>
                            I’m hoping to one day to start a business and sell my crafts and make myself a webshop from scratch 
                            </p>
                        </div>
                    </div>
                </Draggable>
            </div>
            <div  className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" id="interestsBox">
                        <div className='boxHeader handle'>
                            <h2>Experiences / volunteer work</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e)=>{changeVisibility(e, 'i2', 'h')}}>_</button>
                                <button className='box' onClick={(e)=> {changeVisibility(e, 'i2')}}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div className="flexCol" id="i2">
                            <p>UltraHack hackathon - studying the use of an AI (AuroraAI) in a project related to finding and presenting competences </p>
                            <p>
                            Camera / stream operator at Assembly Winter (CS:GO tournament)
                            </p>
                            <p>
                            Youth group leader at the local church for several years (isonen, apuohjaaja ja kerhonvetäjä) and barista at the church’s cafe for teens
                            </p>
                            
                        </div>
                        
                            
                    </div>
                </Draggable>
            </div>
        </div>
       
    );
}

export default Interests;