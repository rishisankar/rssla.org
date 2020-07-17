import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';

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
                    and transfer students. Alongside membership in the Regents Scholar Society, 
                    all Regents Scholars receive:
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

                <TextPanel heading="what we offer">
                    We want our Regents Scholars to grow, to succeed, and to thrive. That's why we provide
                    the following opportunities:
                    <div className="scholarship-benefits-wrapper">
                        <BenefitDescription
                            smallheading="mentorship &amp; families"
                            desc="Our peer mentors are upperclassmen who have recently been in the shoes of
                                our new RSSers and want to give back by helping them learn the ropes of UCLA!
                                Our alumni mentors are graduated RSSers who have broken through their industries
                                and can provide professional advice to aspiring professionals.
                                Finally, our faculty mentorship program pairs RSSers and faculty members to 
                                cultivate relationships and help members learn more about their passions and 
                                fields of study."
                            bgr="family.png"
                        />
                        <BenefitDescription
                            smallheading="academic resources"
                            desc="We offer a variety of different educational resources for our members to take advantage of!
                                Whether it be resume reviews, information sessions, workshops, or course planning 
                                events - we aim to ensure that each RSS member has the resources they need to succeed."
                            bgr="closedbook.png"
                        />
                        <BenefitDescription
                            smallheading="leadership opportunities"
                            desc="Through our committees, you can engage with the society, develop leadership skills, 
                                and utilize all of our resources! Applications open every fall quarter."
                            bgr="handshake.png"
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
                    <img src={`/images/bg_icons/${this.props.bgr}`} alt={this.props.subheading} className="benefit-banner-img" style={imgHeight} />
                    <div className="benefit-banner-text">
                        {this.props.smallheading == null ?
                            <React.Fragment>
                                <div className="benefit-banner-text-heading">{this.props.heading}</div>
                                <div className="benefit-banner-text-subheading">{this.props.subheading}</div>
                            </React.Fragment>
                        :
                            <div className="benefit-banner-text-smallheading">{this.props.smallheading}</div>
                        }
                    </div>
                </div>
                <div className="benefit-banner-desc">{this.props.desc}</div>
            </div>
        )
    }
}

export default Prospectives;