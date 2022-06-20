import { Slide } from "react-slideshow-image";
import React from "react";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import slide1 from "../../Images/p1.png";
import slide2 from "../../Images//p2.jpg";
import slide3 from "../../Images//p5.png";


function Slider() {
  const Images = [slide1,slide2,slide3]
  
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {Images.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              {/* <div style={{backgroundImage: `src(${Images[0]})` }}> */}
              <div>
                <img className={styles.slideImage} src={slide} alt=""></img>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
export default Slider;