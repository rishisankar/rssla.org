import React, { Component } from 'react';

import Banner from '../util/Banner';
import RSSPage from '../util/RSSPage';

class Service extends Component {
    render() {
        return (
            <RSSPage>
                <Banner 
                    text="service"
                    bgr="/images/banners/2021_beachcleanup.jpeg"
                    valign="66%"
                />
            </RSSPage>
        )
    }
}

export default Service;