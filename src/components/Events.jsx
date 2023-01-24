import React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import e1 from "../Images/e1.jpeg";
import e2 from "../Images/e2.jpeg";
import e3 from "../Images/e3.jpeg";
// import p4 from "../images/p4.png";
import e4 from "../Images/e4.jpeg";

function Events() {
    const [index, setIndex] = useState(0);
    const Images = [e1,e2,e3,e4]
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{margin: "auto",marginTop:"10px", width:"100%"}}>
        {
            Images.map((elem)=>{
              return (
              <Carousel.Item key={elem}>
              <img
                style={{display:"block",width:"100%", height:"90vh",transform: "scaleY(2.0)",
                "@media only screen and (maxWidth: 768px)":{
                  maxWidth: "100%",
  height: "10vh"
                }
              }}
                src={elem}
                alt="First slide"
              />
            </Carousel.Item>
              )
            })
        }
        
      </Carousel>
    );
  }
  
export default Events;