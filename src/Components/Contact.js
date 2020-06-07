import React, { Component } from 'react'
import { Name } from "./Name"
import { Email } from "./Email"
import { Thanks } from "./Thanks"

export class Contact extends Component {
    state = {
        step: 0,
        name: "",
        email: ""
    }

    advance = (e) => {
        if (e) {
            e.preventDefault()

            this.setState(prevState => ({
                step: prevState.step + 1
            }))
        }
    }

    retreat = (e) => {
        if (e) {
            e.preventDefault()

            this.setState(prevState => ({
                step: prevState.step - 1
            }))
        }
    }

    handleChange = (name, e) => {
        const value = e.target.value

        this.setState(() => ({
            [name]: value
        }))
    }



    render() {
        const { name, email } = this.state
        const values = { name, email }
        switch (this.state.step) {
            case 0:
                return (
                    <Email
                        advance={this.advance}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 1:
                return (
                    <Name
                        retreat={this.retreat}
                        advance={this.advance}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Thanks
                    />
                )
            default:
                return <div>Error</div>
        }
        // return (
        //     <div>
        //         <h2>We look forward to working with you.</h2>
        //         <h3>What's your name?</h3>
        //         <form action=""></form>
        //     </div>
        // )
    }
}

export default Contact
