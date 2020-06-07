import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./styles/Home.scss"

export class Home extends Component {
    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState(() => ({
            email: e
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="Home">
                <div className="copy">
                    <h2>Where more happens for less.</h2>
                    <h3>We give small companies access to high quality marketing and promotion.</h3>
                    <form action="#">
                        <div className="flex-row">
                            <input autoFocus
                                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                                type="email" placeholder="Your email" value={this.state.email} onChange={(e) => { this.handleChange(e.target.value) }} />
                            <button className="cta">Book a demo &#12297;</button>
                        </div>
                        <div className="flex-row">
                            <span className="assurance"><em> Free demo, no commitment.</em> Your information will not be shared.</span>
                        </div>
                    </form>
                </div>
                <div>
                    <h2>Why Starlide?</h2>

                </div>
            </div>
        )
    }
}

export default Home
