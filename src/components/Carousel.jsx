import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [count,setCount] = useState(0);
    const data = { images };
    const image = data.images[count].img;
    const text1 = data.images[count].subtitle;
    const text2 = data.images[count].title;
    
    const backward = () => {
        if (count==2){
            setCount(0)
        }else{
            setCount((cou) => {
                return cou + 1
            })
        }
    }

    const forward = () => {
        if(count==0){
            setCount(2)
        }else{
            setCount((cou) => {
                return cou - 1
            })
        }
    }


    return(
        <div  className="container" >
            <ArrowBackIosIcon className="arrow" onClick={forward}/>
            <div className="container2" >
            <h3 className="sub" >{text1}</h3>
            <img src={image} alt="" />
            <h3 className="title" >{text2}</h3>
            </div>
            <ArrowForwardIosIcon className="arrow" onClick={backward}/>            
        </div>
    )
}

export default Carousel;