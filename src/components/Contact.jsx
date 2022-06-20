import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt=""/>
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>
                <a href="tel:8862026900">+91 9453248138</a>
              </h2>
              <h2>
                <a href="tel:7715096153">+91 7715096153</a>
              </h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt=""/>
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>
                <a href="mailto: vikashss882@gmail.com">
                  <h5>vikashss882@gmail.com</h5>
                </a>
              </h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"  alt=""/>
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.457421907711!2d20.486353716222904!3d54.71916848028964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x284054d2fac2875d!2z0JHQuNGC0YDQuNC60YEyNA!5e0!3m2!1sru!2sru!4v1536590497258">
                  Village Jamu, Dist. Banda, Uttar Pradesh
                </a>
              </h2>
            </div>
          </div> 
        </div>
        <div style={{width:"100%", textAlign:'center', marginTop:"50px"}}>
        <iframe title="School Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2200772748356!2d80.78891131448918!3d25.430904828420843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399caa664970a83f%3A0x60644f68c3a5f25d!2sVikas%20Uchchatar%20Madhyamik%20Vidyalaya!5e0!3m2!1sen!2sin!4v1653578582572!5m2!1sen!2sin"
           style={{width:"80%", height:"500px", border:"0", allowFullScreen:"",
           loading:"lazy", referrerPolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
