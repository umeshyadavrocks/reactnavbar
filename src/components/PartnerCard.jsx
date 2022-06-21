import React,{useState} from 'react'
import "./partnercard.styles.css" 
import p11 from "../Images/p11.jpeg";
import p12 from "../Images/p12.jpeg";
import p13 from "../Images/p13.jpeg";
import p14 from "../Images/p14.jpeg";
import p15 from "../Images/p15.jpeg";
import p16 from "../Images/p16.jpeg";
export default function PartnerCard({Name,mail,phn,id,Subject,dsgn}) {
  const Images = [p15,p16,p14,p11,p12,p13]
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="card">
  <img src={Images[id]} alt=""  className='image'/>
  <strong><h2>{Name}</h2></strong>
  <strong><p>{dsgn}</p></strong>
  <a href="#"><strong><h5 style={{ fontSize:"14px"}}>{mail}</h5></strong></a>
  
  <p><button>Phone : {phn}</button></p>
</div>
    </>
  )
}
