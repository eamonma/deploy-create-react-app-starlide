import Burger from 'react-css-burger'
import React, { Component } from 'react'
import {
  NavLink,
  Link
} from "react-router-dom"

import "./styles/Navigation.scss"

export class Services extends Component {
  state = {
    active: false
  }

  componentDidUpdate(prevProps, prevState) {
    const body = document.getElementsByTagName("body")[0]
    if(body.scrollWidth < 650) {
      if(this.state.active) {
        body.classList.add("noscroll")
      } else {
        body.classList.remove("noscroll")
      }
    } 
  }
  

    render() {
        return (
            <nav>
          {
            <h1><Link to="/">Starlide</Link></h1>
          }
          <Burger
            onClick={() => {
              this.setState({ active: !this.state.active })
            }}
            active={this.state.active}
            burger="spin"
            marginTop="0"
            marginLeft="0"
            scale="0.8"
            style={{
              margin: "10px",
              display: "block",
              zIndex: "10"
            }}
          />
          <ul className={this.state.active && "active"} onClick={() => this.setState(() => ({ active: !this.state.active }))}>
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
        )
    }
}

export default Services
