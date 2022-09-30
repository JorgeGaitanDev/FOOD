import React from "react";
import "../landingPage/landingPage.css";
import { Link } from "react-router-dom";
// import Logo from '../landingPage/img1.png'
import Logo2 from '../landingPage/img2.png'

const LanndingPage = () => {
  return (
    <div className="backgorund_image">
      <section>
      <div className="circle"/>
        <header>
          <img
            src={Logo2}
            alt='logo_img'
            className="logo"
          />
        </header>
        <div className="content_landing">
          <div className="textBox" >
          <h2>
          Let's eat out tonight!  <br></br>I'll show you <span> some recipes.</span>
          </h2>
          <p>
          "Let's eat, dance and enjoy that the world is going to end".
          </p>
          <Link to={'/home'}>
            <div className="home_button">GO!</div>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanndingPage;
