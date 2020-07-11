import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import TextPanel from '../util/TextPanel';

import './prospectives.css';

class Prospectives extends Component {
    render() {
        return (
            <RSSPage className="prospectives">
                <Banner 
                    text="prospectives" 
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />

                <TextPanel heading="the scholarship">
                    The Regents Scholarship is awarded to up to 100 incoming freshmen 
                    and transfer students.
                    <br/>
                    Alongside membership in the Regents Scholar Society, all Regents Scholars receive:
                    <div className="scholarship-benefits-wrapper">
                        <BenefitDescription
                            heading="$2000"
                            subheading="honorarium"
                            desc="A $2,000 honorarium, awarded quarterly for four years (or two years for transfers).
                                Additionally, university scholarships or grants to cover the student's financial need."
                            bgr="openbook.png"
                        />
                        <BenefitDescription
                            heading="13"
                            subheading="units"
                            desc="Priority enrollment in 13 class units, starting in their second quarter."
                            bgr="pencil.png"
                            scale="90%"
                        />
                        <BenefitDescription
                            heading="4"
                            subheading="years"
                            desc="Four years of university housing upon submission of the Housing application. 
                                Additionally, a parking pass upon submission of the Parking application."
                            bgr="house.png"
                            scale="90%"
                        />
                    </div>
                </TextPanel>

            </RSSPage>
        )
    }
}

class BenefitDescription extends Component {
    render() {
        const imgHeight = {
            height: this.props.scale == null ? "100%" : this.props.scale
        }
        return (
            <div className="scholarship-benefit">
                <div className="benefit-banner">
                    <img src={`/images/bg_icons/${this.props.bgr}`} alt="square" className="benefit-banner-img" style={imgHeight} />
                    <div className="benefit-banner-text">
                        <div className="benefit-banner-text-heading">{this.props.heading}</div>
                        <div className="benefit-banner-text-subheading">{this.props.subheading}</div>
                    </div>
                </div>
                <div className="benefit-banner-desc">{this.props.desc}</div>
            </div>
        )
    }
}

export default Prospectives;