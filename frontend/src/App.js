import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ExplorePage from "./components/ExplorePage";
import ImageDetail from "./components/ImageDetail";
import bubbleimg from "./wrongpagebubble.png";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route exact path="/images/:id">
            <ImageDetail />
          </Route>
          <Route path="*">
            <div className="random-bubble">
              <img src={bubbleimg}></img>
            </div>
          </Route>
        </Switch>
      )}
      {/* {location.pathname !== "/signup" && <Footer />} */}
      <Footer />
    </>
  );
}

export default App;
