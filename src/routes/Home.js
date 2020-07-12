import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import TextPanel from '../util/TextPanel';

import './home.css';

class Home extends Component {
    render() {
        return (
            <RSSPage className="home">
                <Banner 
                    text="this is rss" 
                    subtext="regents scholar society at ucla" 
                    video="true"
                />

                <div className="about-panel">
                    <TextPanel heading="about us">
                        <p>
                            The Regents Scholar Society is composed of students with 
                            different identities, interests, and passions. Whether 
                            north campus or south campus, pre-med or business, scientists 
                            or artists, the society transcends these divisions through 
                            our shared commitment to scholarship, leadership, and service.
                        </p>
                        <p>
                            We strive to support our members and the local community
                            through our various internal and external programs, including
                            service events, leadership opportunities, and the Los Angeles
                            Mentorship Program.
                        </p>
                    </TextPanel>
                    <div className="about-img-wrapper" />
                </div>
            </RSSPage>
        )
    }
}

export default Home;