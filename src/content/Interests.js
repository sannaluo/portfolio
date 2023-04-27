import React from "react";
import Draggable from "react-draggable";


function Interests() {
    return (
            <div id="interestsContainer" className="boxContainer">
                <Draggable handle=".handle" bounds="body">
                    <div className="box boxContent" id="interestsBox">
                        <div className='boxHeader handle'>
                            <h2>Hobbies</h2>
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
                            
                    </div>
                </Draggable>
            </div>
       
    );
}

export default Interests;