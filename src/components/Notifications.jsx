import React from 'react'

export default function Notifications() {
  return (
    <>
    <h2 style={{textAlign: "center"}}>Notifications</h2>
    <div style={{width: "80%", margin: "auto", textAlign: "center", backgroundColor: "skyblue", height: "400px",marginBottom: "20px"}}>
             <div className='marquee'>
                    <p className='moving-text'>Last Date for the Admissions of Std. 10  & 12 is 5th. Aug. 2022.</p>
                    <p className='moving-text'>  Last Date for the Admissions of Std. 9  & 11 is 5th. Aug. 2022.</p>
             
             </div>  
        
    </div>
    </>
  )
}
