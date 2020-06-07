import React from 'react'

export const Email = (props) => {
    const { retreat, advance, handleChange, values } = props
    return (
        <div className="step">
            <h2>We look forward to working with you.</h2>
            <form onSubmit={advance}>
                <div className="flex-row">
                    <h3>What's your email?</h3>
                    <label htmlFor="email">Email:</label>
                    <input autoFocus type="email" name="email" onChange={(e) => { handleChange("email", e) }} required placeholder="kyle@x.com" />
                </div>
                <div className="flex-row">
                    <i></i>
                    <button
                        disabled={!values.email}
                        onClick={advance}
                        className="safety" type="submit">Next &#12297;</button>
                </div>
            </form>
        </div>
    )
}