import React from 'react'
import "./Section.css";
import Reveal from 'react-reveal/Reveal';
import dArrow from "../images/down-arrow.svg";

function Section({title, description, leftButton, rightButton, backImage}) {
  return (
  
    <div className="section"  
    style={{
      backgroundImage: `url(${backImage})`}}>
          <Reveal effect="fadeInUp">           
              <div className="section__text">  
                    <h1>{title}</h1>
                    <p>{description}</p>
              </div>
        </Reveal>       
        <div>
          <div className="section__button">
              <button className="section__left">{leftButton}</button>
              {rightButton && <button className="section__right">{rightButton}</button> }
                          
          </div>
          <img className="section__image" src={dArrow} alt="" />
       </div>
    </div>
  )
}

export default Section;