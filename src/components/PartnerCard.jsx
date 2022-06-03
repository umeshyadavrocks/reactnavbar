import React,{useState} from 'react'
import "./partnercard.styles.css" 
import p11 from "../Images/p11.jpeg";
import p12 from "../Images/p12.jpeg";
import p13 from "../Images/p13.jpeg";
// import p4 from "../images/p4.png";
import p14 from "../Images/p14.jpeg";
import p15 from "../Images/p15.jpeg";
import p16 from "../Images/p16.jpeg";
export default function PartnerCard({Name,mail,phn,id,Subject,dsgn}) {
  const [index,setIndex] = useState(0);
  const Images = [p15,p16,p14,p11,p12,p13]
  // function handleIndex(){
  //   setIndex(index+1);
  // }
  // handleIndex();
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="card">
  <img src={Images[id]} alt=""  style={{ width:"70%"}}  />
  <strong><h1>{Name}</h1></strong>
  <strong><p>{dsgn}</p></strong>
  <a href="#"><strong><h5 style={{ fontSize:"16px"}}>{mail}</h5></strong></a>
  
  <p><button>Phone : {phn}</button></p>
</div>
    </>
  )
}