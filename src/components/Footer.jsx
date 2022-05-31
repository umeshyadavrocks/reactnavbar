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
        <h2>Your Complete Learning Solutions</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://www.facebook.com/techedu.learning">
              <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://instagram.com/techedu_learning">
              <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/company/techedu-learning/">
              <img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.youtube.com/channel/UC5eq2L4HBYSMXtcgXr6jPJg">
              <img src="https://img.icons8.com/bubbles/50/000000/youtube.png" />
            </a>
          </div>
        </div>
        <p>Copyright © {year} Vikas Higher Secondary School</p>
      </div>
    </section>
  );
}

export default Footer;
