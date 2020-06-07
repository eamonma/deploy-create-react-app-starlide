import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="About content">
                <h2>Who are we?</h2>
                <section>
                    <p>Starlide Media (We are not sure if that is a good name from a marketing standpoint) is a company where we provide the service of creating high-quality video advertisements for a very good price. We are here to help make marketing much easier for the company, by offering services of video creation, all the way to managing their online marketing via FaceBook ads and Instagram Ads. </p>
                </section>
                <hr/>
                <h2>The team</h2>
                <section className="members">
                    <div className="member">
                        <h3>John Appleseed</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="John Appleseed's face" className="avatar" />
                        <p className="bio">
                            In carnatic music, pallavi also forms a part of a special type of rendition called Rāgam Thānam Pallavi. Rāgam in this context is the initial ālāpana of chosen rāgam (elaboration and exploration of its scale). Thānam is elaboration of the rāgam using percussion syllables. Pallavi, a single line of one tālam cycle duration, is chosen for further elaboration of the rāgam in different speeds, octaves, rāgam phrases, etc. The Pallavi is mainly presented as the pièce de résistance of the concert.
                        </p>
                    </div>
                    <div className="member">
                        <h3>Jane Appleseed</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="John Appleseed's face" className="avatar" />
                        <p className="bio">
                            The Company is based on a single partnership between Felix Soong, an award-winning camera videographer, and Shahaab Oshidary, who has won an award from the mayor and leader of the Capilano Youth Committee’s marketing team.
                        </p>
                    </div>
                    <div className="member">
                        <h3>Jahyne Appleseed</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="John Appleseed's face" className="avatar" />
                        <p className="bio">
                            The vision that we have with this company is to make marketing available to everyone, from the big companies all the way to the small companies. We want to do all of that for a lower cost than all of the other companies as well. We value quality A LOT and believe that no matter what task we are to tackle, we will do them all with 110%. We hope to bring top quality content for everyone who needs it to grow their company.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
