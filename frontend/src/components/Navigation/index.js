import React from "react";
// import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import CreateImageForm from "../CreateImageForm/CreateImageForm";
import img from "../images/favicon-32x32.png";
// import "./Navigation.css";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import "./Navigation.css";

//uselocation, check if location is signup, if so return null, otherwise, return 26-37

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/images/new" className="postBtn">
          <i className="fa-solid fa-circle-plus"></i>
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="signup">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div>
          <LoginFormModal />
        </div>
      </>
    );
  }

  return (
    <>
      <Nav>
        <NavLink exact to="/">
          <img src={img} alt="logo"></img>
          <p className="islandr">islandr</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/explore" className="explore-button">
            <i className="fa-regular fa-compass"></i>
          </NavLink>
          {/* <NavLink to="/k" activeStyle>
            Example
          </NavLink> */}
          {isLoaded && sessionLinks}
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navigation;

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
