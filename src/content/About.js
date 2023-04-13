import React from "react";


const learnMore = (e) => {
    e.preventDefault();

    // lisää sisältöä tai vaihtuminen kun painetaan
}



function About() {
    return (
        <div id="aboutContainer">
            <div className="box" id="aboutBox">
                <div className='boxHeader'>
                    <h2>About me</h2>
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
                <button className="box cornerRightButton" onClick={(e)=>{learnMore(e)}}>Learn more</button>
            </div>
        </div>
    );
}

export default About;