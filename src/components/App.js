import React, { useState } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import About from "./about";
import Home from "./home";
import LocationDisplay from "./LocationDisplay";
import NoMatch from "./noMatch";
import "../styles/App.css";

function LocationRender() {
  let newLocation = useLocation().pathname;

  return newLocation;
}

function App() {
  const locationPath = LocationRender();
  const [location, setLocation] = React.useState(locationPath);

  if (location !== locationPath) {
    setLocation(locationPath);
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <LocationDisplay location={location} />
      <Switch>
        <Route path="/no-match" component={NoMatch} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/no-match" />
      </Switch>

      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  );
}

export default App;
