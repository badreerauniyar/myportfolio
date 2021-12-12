import React from 'react'
import "./intro.css";
import me from "../../img/badriP.png"

export const Intro = () => {
    return (
        <div className="i">
            <div className="i-left"> 
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello , My name is</h2>
                <h1 className="i-name">Badri Rauniyar</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI-UX Designer</div>
                        <div className="i-title-item">Vector Artist</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop fullstack responsive website 
                    specialize in creating personal and store website.
                    Along with that I make vector arts.
                </p>
            </div>
            
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me}  className="i-img" />
            </div>
        </div>
    )
}
