import React from "react";
import Draggable from "react-draggable";
import cvPdf from './cv.pdf';


function Skills() {
    return(
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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores vitae totam architecto nobis inventore ullam maxime error,
                    repellat dignissimos minus debitis illum magni voluptatibus dolores.
                    Ducimus eius suscipit velit officiis!</p>
                    <a className="box cornerRightButton" href={cvPdf} download="Sanna_Luostarinen_cv" >Download my CV</a>
            </div>
        </Draggable>
    </div>
    );
}

export default Skills;