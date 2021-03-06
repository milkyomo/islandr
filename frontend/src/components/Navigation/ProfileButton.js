import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <div className="menu-container">
      <p onClick={openMenu} className="profile-button">
        <i className="fas fa-user-circle" />
      </p>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Welcome, {user.username}! ♡</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout} className="logout-button">
              Log Out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//       setShowMenu(false);
//     };

//     document.addEventListener("click", closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//   };

//   return (
//     <div className="loggedin-container">
//       <div className="loggedin">
//         <p onClick={openMenu} className="profile-button">
//           <i class="fa-regular fa-circle-user"></i>
//         </p>
//         {showMenu && (
//           <div className="profile-dropdown">
//             <p>Welcome, {user.username}!</p>
//             <button onClick={logout} className="logout-button">
//               Log Out
//             </button>
//           </div>
//         )}
//       </div>
//       <p className="welcome-text">Hi, {user.username}!</p>
//     </div>
//   );
// }

// export default ProfileButton;
