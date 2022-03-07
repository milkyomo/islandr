import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import img from "../images/favicon-32x32.png";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/explore" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demo = (e) => {
    e.preventDefault();
    const credential = "Islander";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password }));
  };

  return (
    <div className="loginmodal-container">
      <div className="loginmodal-container-box">
        <h1>Login to islandr</h1>
        <img src={img} />
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            name="user"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" name="login" className="login loginmodal-submit">
          Login
        </button>
      </form>
      <div className="bottom-container">
        <a className="demo-link" onClick={demo}>
          or use a visitor pass
        </a>
        <hr></hr>
        <p className="signup-container">
          Not a member yet?
          <a href="/signup" className="createaccount">
            Sign Up.
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
