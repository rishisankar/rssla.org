import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './home.css';

class Home extends Component {
    render() {
        return (
            <RSSPage className="home">
                <Banner 
                    text="this is rss" 
                    subtext="regents scholar society at ucla" 
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />

                content
                <br/> content
                <br/> content
                <br/> content
                <br/> content
                <br/> content
                <br/> content
                <br/> content
            </RSSPage>
        )
    }
}

export default Home;