import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            body: ""
        }
    }

    changeSubject(event) {
        this.setState({subject: event.target.value});
    }

    changeBody(event) {
        this.setState({body: event.target.value});
    }

    render() {
        return (
            <RSSPage className="contact">
                <Banner 
                    text="contact us" 
                    bgr="/images/banners/2020_iceskating.png"
                    darkness="0"
                    valign="45%"
                />

                <div className="contact-wrapper">
                    <div className="input-wrapper">
                        <div className="input-header">EMAIL SUBJECT</div>
                        <input 
                            type="text" 
                            className="contact-message-input" 
                            placeholder="Email Subject"
                            value={this.state.subject}
                            onChange={(event)=>this.changeSubject(event)}
                        />
                    </div>

                    <div className="input-wrapper">
                        <div className="input-header">YOUR MESSAGE</div>
                        <textarea 
                            className="contact-message-input" 
                            placeholder="Your Message" 
                            value={this.state.body}
                            onChange={(event)=>this.changeBody(event)}
                        />
                    </div>
                        
                    <a 
                        className="send-message-button" 
                        href={`mailto:president@rssla.org?subject=${this.state.subject}&body=${this.state.body}`}
                    >
                        Send Message
                    </a>    
                </div>
            </RSSPage>
        )
    }
}

export default Contact;