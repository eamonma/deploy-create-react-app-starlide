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
                    <h2>More for less.</h2>
                    <h3>We give companies access to high quality video and web design to showcase their brands.</h3>
                    <form action="#" onSubmit={this.handleSubmit}>
                        <div className="flex-row">
                            <input autoFocus
                                autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                                type="email" placeholder="Your email" value={this.state.email} onChange={(e) => { this.handleChange(e.target.value) }} />
                            <button className="cta" type="submit">Book&nbsp;a&nbsp;demo&nbsp;&#12297;</button>
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
