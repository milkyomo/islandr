import React from "react";
// import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import img from "../images/favicon-32x32.png";
// import "./Navigation.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./Navigation2.css";

//uselocation, check if location is signup, if so return null, otherwise, return 26-37

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <ul>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <LoginFormModal />
        </li>
      </ul>
    );
  }

  return (
    <>
      <Nav>
        <NavLink exact to="/">
          <img src={img} alt="logo"></img>
          islandr
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/explore" activeStyle>
            Explore
          </NavLink>
          <NavLink to="/k" activeStyle>
            Example
          </NavLink>
          {isLoaded && sessionLinks}
        </NavMenu>
      </Nav>
    </>
  );

  // return (
  //   <>
  //     <Nav>
  //       <NavLink exact to="/">
  //         <img src={img} alt="logo"></img>
  //         islandr
  //       </NavLink>
  //       <Bars />
  //       <NavMenu>
  //         <NavLink to="/explore" activeStyle>
  //           Explore
  //         </NavLink>
  //         <NavLink to="/k" activeStyle>
  //           Example
  //         </NavLink>
  //       </NavMenu>
  //       <NavBtn>
  //         <NavBtnLink to="/signin">Sign In</NavBtnLink>
  //       </NavBtn>
  //     </Nav>
  //   </>
  // );

  // return (
  //   <div className="navigation">
  //     <div className="content-container">
  //       <div className="logo-container">
  //         <a href="/">
  //           <img src={img} alt="logo"></img>
  //           islander
  //         </a>
  //       </div>

  //       <div className="right-container">
  //         <NavLink exact to="/explore" className="explore">
  //           {/* Explore */}
  //           <i class="fa-regular fa-compass"></i>
  //         </NavLink>
  //         <div className="profile">{isLoaded && sessionLinks}</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Navigation;
