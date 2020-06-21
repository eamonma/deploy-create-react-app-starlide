import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom"

import Home from "./Components/Home"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navigation from "./Components/Navigation"

function Starlide() {
  return (
    <Router>
      <header>
        <Navigation></Navigation>
      </header>

      <main>
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/contact&">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default Starlide;

// Allowing smaller companies acces to smaller videos. Money is no boundary when it comes to quality content and we we want to give all companies a chance to shine with a video or website to display there brands truthfully for the people to see
