import React, { useState } from 'react'
import "./slider.css"

import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

export const Slider = () => {
    const [index, setIndex] = useState(5);
    const handleClickleft=()=>{
        if(index>1){
            setIndex(index-1);
        }
        console.log(index);
    }
    const handleClickright=()=>{
        if(index<13){
            setIndex(index+1);
        }
        console.log(index);
    }
    return (
       <div className="slider">
          <div className="slider-bg"></div>
           <h2 className='title'>My vector arts</h2>
              <div className="wrapper">
              {/* src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}  */}
                  <img src={process.env.PUBLIC_URL +`/img/img${index}.png` }  className="image" /> 
              </div>
              <div className="arrow">
                  <div className="leftArrow" onClick={handleClickleft}>
                      <ArrowBackIosOutlined/>
                  </div>
                  <div className="rightArrow" onClick={handleClickright}>
                      <ArrowForwardIosOutlined/>
                  </div>
              </div>
            
       </div>
    )
}
