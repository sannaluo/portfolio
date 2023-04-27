import React from "react";
import Draggable from "react-draggable";
import {changeVisibility} from "./Visibility";


const learnMore = (e) => {
    e.preventDefault();

    // lisää sisältöä tai vaihtuminen kun painetaan
}



function About() {
    return (
        
            <div id="aboutContainer" className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" id="aboutBox">
                        <div className='boxHeader handle'>
                            <h2>About me</h2>
                            <div className='boxButtons'>
                                <button className='box' onClick={(e)=>{changeVisibility(e, 'a1', 'h')}}>_</button>
                                <button className='box' onClick={(e)=> {changeVisibility(e, 'a1')}}>□</button>
                                <button className='box'>x</button>
                            </div>
                        </div>
                        <div id="a1" className="flexCol">
                            <p>Hi! I’m Sanna. I’m  a frontend developer.
                                I enjoy solving logical problems with my engineer brain and I also like visually nice looking things. Other than coding in web development, I’m interested in UX design, mixed reality and accessibility. I like planning and documenting my work: you can find the documentation to my portfolio site below. Explore the page and learn more about me and my competences!
                            </p>
                            <button className="box cornerRightButton" onClick={(e)=>{learnMore(e)}}>Site docs</button>
                        </div>
                    </div>
                </Draggable>
            </div>
       
    );
}

export default About;