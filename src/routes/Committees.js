import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './committees.css';

class Committees extends Component {
    render() {
        return (
            <RSSPage className="committees">
                <Banner 
                    text="committees" 
                    bgr="/images/banners/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />

            </RSSPage>
        )
    }
}

export default Committees;