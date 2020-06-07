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

function Starlide() {
  return (
    <Router>
      <header>
        <nav>
          <h1><Link to="/">Starlide</Link></h1>
          <ul>
            <li>
              <NavLink activeClassName="current-link" to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current-link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="current-link" to="/contact">Contact</NavLink>
            </li>
            <li>
              <Link className="cta" to="/contact&">Book a demo</Link>
            </li>
          </ul>
        </nav>
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
