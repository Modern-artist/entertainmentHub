import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footAbt">
        <h4 className="footSubHead">About Me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at id
          praesentium aliquid alias sint doloribus, quas aspernatur, quae iure
          hic et sit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          molestiae facilis nulla optio?
        </p>
      </div>
      <div className="footExp">
        <div className="footDis">
          <h4 className="footSubHead">Discover</h4>
          <span>Discove one</span>
          <span>Discover two</span>
          <span>Discover three</span>
          <span>Discover four</span>
        </div>
        <div className="footDis">
          <h4 className="footSubHead">Explore</h4>
          <span>explore one</span>
          <span>explore two</span>
          <span>explore three</span>
          <span>explore four</span>
          <span>explore four</span>
          <span>explore four</span>
        </div>
      </div>

      {/* <div className="footCont">
        <h3>Any Qureies?</h3>
        <div className="inputs">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <input type="textarea" rows="4" cols="100" placeholder="Message" />
          <center>
            <button type="submit">SEND</button>
          </center>
        </div>
      </div> */}
    </div>
  );
}

export default Footer