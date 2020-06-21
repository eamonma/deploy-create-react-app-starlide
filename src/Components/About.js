import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="About content">
                <h2>Who are we?</h2>
                <section>
                    <p>
                    We aim to provide a detail-oriented approach to helping businesses grow and make an impact on their community.
                    </p>
                </section>
                <hr/>
                <h2>The team</h2>
                <section className="members">
                    <div className="member">
                        <h3>Eamon&nbsp;Ma</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="Eamon Ma's face" className="avatar" />
                        <p className="bio">
                            Eamon creates responsive, beautiful, and accessible websites. He will be studying at the University of Toronto in September.
                        </p>
                    </div>
                    <div className="member">
                        <h3>Shahaab&nbsp;Oshidary</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="Shahaab Oshidary's face" className="avatar" />
                        <p className="bio">
                            Shahaab is driven to help businesses grow, no matter the size. He is passionate to provide excellent service, and has great attention to detail. Shahaab plans to study at Simon Fraser University.
                        </p>
                    </div>
                    <div className="member">
                        <h3>Felix&nbsp;Soong</h3>
                        <img src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
                            alt="Felix Soong's face" className="avatar" />
                        <p className="bio">
                            Felix Soong is an award winning filmmaker that sees that value in effective video content. When he's not behind a camera, he's playing with one of his 20 twisty puzzles. Felix plans to study at Capilano Univeristy in the fall.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
