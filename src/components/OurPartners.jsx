import React from "react";
import p11 from "../Images/p11.jpeg";
import p12 from "../Images/p12.jpeg";
import p13 from "../Images/p13.jpeg";
// import p4 from "../images/p4.png";
import p14 from "../Images/p14.jpeg";
import p15 from "../Images/p15.jpeg";
import PartnerCard from "./PartnerCard";
function OurPartners() {
    const person =[ {id: 0,url:"../Images/p11.jpeg", Name:"Dev Kumar Yadav", Subject: "Social Science/Arts", mail:"DEV511049@GMAIL.COM",phn:"7897694310",dsgn:"Bachelor of Arts"},
    {id: 1,url:"../Images/p12.jpeg", Name:"Ram Naresh Yadav", Subject: "Social Science/Hindi", mail:"RAMCKT0@GMAIL.COM",phn:"9453248138",dsgn:"Bachelor of Arts"},
    {id: 2,url:"p12", Name:"Ram Vishal Yadav", Subject: "Home Science/Hindi", mail:"RAMV59049@GMAIL.COM",phn:"9651222015",dsgn:"Bachelor of Arts"},
    {id: 3,url:"p13", Name:"Swatantra Singh", Subject: "Science/Mathematics", mail:"S3395548@GMAIL.COM",phn:"7706021878",dsgn:"Bachelor of Science"},
    {id: 4,url:"p14", Name:"Tarun Kumar", Subject: "Social Science/English", mail:"TARUNKUMARYADAV88@GMAIL.COM",phn:"7398859013",dsgn:"Bachelor of Arts"},
    {id: 5,url:"p15", Name:"Uma Shankar Yadav", Subject: "Sanskrit/Arts", mail:"USHASNKA5110@GMAIL.COM",phn:"9695814066",dsgn:"Bachelor of Arts"},]
  return (
    <div id="our-partners">
      <h3>OUR INGREDIENT PART</h3>
      <h1>OUR TEACHING STAFF</h1>
      <hr className="fancyLine" />
      <div className="partner">
            {person.map((elem) => {
                  return (
                    <PartnerCard key={elem.id} {...elem}/>
                  );
        })}
      </div>
      
      
    </div>
  );
}

export default OurPartners;
