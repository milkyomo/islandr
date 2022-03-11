import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer-container">
    <footer className="footer">
      {/* <p>React/Redux</p>
      <p>Express</p>
      <p>JavaScript</p>
      <p>Sequelize</p> */}
      <a href="https://www.linkedin.com/in/sharonfang8/">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/milkyomo">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.reddit.com/r/AnimalCrossing/comments/foeiwf/new_horizons_dock_design_at_night_nook_island_in/">
        <i className="fa-solid fa-circle-info"></i>
      </a>
    </footer>
  </div>
);

export default Footer;
