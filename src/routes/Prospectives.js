import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives.css';

class Prospectives extends Component {
    render() {
        return (
            <RSSPage className="prospectives">
                <Banner 
                    text="prospectives" 
                    bgr="/images/banners/2017_Conference.jpg"
                    darkness="0"
                    valign="65%"
                />

                <TextPanel heading="the scholarship" id="first-text-panel">
                    The Regents Scholarship is awarded to up to 100 incoming freshmen 
                    and transfer students. Alongside membership in the Regents Scholar Society, 
                    all Regents Scholars receive:
                    <BenefitWrapper>
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
                    </BenefitWrapper>
                </TextPanel>

                <TextPanel heading="what we offer" id="second-text-panel">
                    We want our Regents Scholars to grow, to succeed, and to thrive. That's why we provide
                    the following opportunities:
                    <BenefitWrapper>
                        <BenefitDescription
                            smallheading="mentorship &amp; families"
                            desc="All freshmen are able to match with a peer mentor and join a mentorship family. Your
                                mentor can guide you through choosing classes, joining student organizations, and any
                                advice you need. Your mentorship family is a group of RSSers you will become close friends with!"
                            bgr="family.png"
                        />
                        <BenefitDescription
                            smallheading="academic resources"
                            desc="We offer a variety of different educational resources for our members to take advantage of!
                                Whether it be resume reviews, information sessions, workshops, our test bank, or course planning 
                                events - we aim to ensure that each RSS member has the resources they need to succeed."
                            bgr="closedbook.png"
                        />
                        <BenefitDescription
                            smallheading="leadership opportunities"
                            desc="Through our committees, you can engage with the society, develop leadership skills, 
                                and utilize all of our resources! Applications open every fall quarter."
                            bgr="handshake.png"
                        />
                    </BenefitWrapper>
                </TextPanel>

            </RSSPage>
        )
    }
}

export default Prospectives;