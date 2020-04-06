import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../Portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
        <i className="fab fa-facebook"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.stackoverflow} className="flair-stackoverflow" target="_blank">
      <img src="https://stackoverflow.com/users/flair/12301044.png?theme=dark" width="208" height="58" alt="profile for Oscar Luna at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Oscar Luna at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></img>
      </a>
    </div>
  );
}
