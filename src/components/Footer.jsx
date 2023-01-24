import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            <span>VIKAS</span>{" "}HIGHER SECONDARY SCHOOL
          </h1>
        </div>
        <h2>Come To Learn, Go To Serve!</h2>
      </div>
      <div style={{textAlign:"center"}}>
              <p>Copyright © {year} Vikas Higher Secondary School</p>
      </div>
      
    </section>
  );
}

export default Footer;
