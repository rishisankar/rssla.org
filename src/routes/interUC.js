import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';

import './interUC.css';

class interUC extends Component {
    render() {
        return (
            <RSSPage className="interUC">
                <Banner 
                    text="inter-UC conference!" 
                    bgr="/images/banners/induction.png"
                    darkness="0.2"
                    valign="50%"
                />
                <TextPanel heading="coming soon!" id="what-we-offer-panel">
                </TextPanel>
            </RSSPage>
            )
        }
    }

export default interUC;