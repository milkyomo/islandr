import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

//uselocation, check if location is signup, if so return null, otherwise, return 26-37

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">Sign Up</NavLink>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className="navigation">
      <div className="content-container">
        <ul>
          <li>
            <NavLink exact to="/explore">
              Explore
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
