import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="Services content">
                <h2>Services</h2>
                <section className="services">
                    <div className="service">
                        <h3>Video&nbsp;production</h3>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <p>
                        After an initial session, we align our goals with yours. Armed with comprehensive knowledge of your brand, its style, values, and mission, we create powerful video content to tell your story. 
                        </p>
                        <p>
                        An effective video is so much more than just being pretty. It's emotional. It tells a story. We think that being pretty is just the beginning; we take your goals and target audience into consideration. We vow to provide the best results within any budget.
                        </p>
                        <p>
                        Whether it's advertisements or community integration, marketing or internal communication, we are confident our exprience in video production will help you succeed.
                        </p>
                    </div>

                    <div className="service">
                        <h3>Web&nbsp;development</h3>
                        <img src="https://via.placeholder.com/200" alt="" />
                        <p>
                        We believe that a beautiful, accessible, and mobile responsive website helps immensely in establishing a brand identity and allowing potential customers to find you easily. Clients trust businesses with an Internet presence more than one without.
                        </p>
                        <p>
                        A great website is not just about great visual design; the experience must be 
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services
