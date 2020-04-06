import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../Portfolio";
import {Fade} from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Oscar With His Cousins" src=
          {require("../../assests/images/shemeher.jpg"
          )}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
