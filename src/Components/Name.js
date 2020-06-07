import React from 'react'

export const Name = (props) => {
    const { retreat, advance, handleChange, values } = props
    return (
        <div className="step">
            <h2>We look forward to working with you.</h2>
            <form onSubmit={advance}>
                <div className="flex-row">
                    <h3>What's your name?</h3>
                    <label htmlFor="name">Name:</label>
                    <input
                        value={values.name}
                        autoFocus type="text" name="name" onChange={(e) => { handleChange("name", e) }} required placeholder="X Æ A-12" />
                </div>
                <div className="flex-row">
                    <button type="button" onClick={retreat}>&#12296; Back</button>
                    <button
                        disabled={!values.name}
                        className="safety" type="submit">Submit &#12297;</button>
                </div>
            </form>
        </div>
    )
}

//  fencing soccer basketball squash tennis pottery origami photography film skateboarding skiing snowboarding magic saxophone violin viola guitar drum
// basketball film photography computers business cubing fish sotck "pokemon"
// math film photo cardistry magic cubing knife sharpening fountainpens computerscience lockpicking poker cards data-hoarding sailing 