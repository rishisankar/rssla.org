import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives_old.css';
import '../util/osp.css';

class ProspectivesOld extends Component {
    render() {
        return (
            <RSSPage className="prospectives_old">
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
                            heading="10"
                            subheading="units"
                            desc="Priority enrollment in 10 class units, starting in their second quarter."
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

                <TextPanel heading="office hours" id="third-text-panel">
                    Office Hours this week at the following Zoom link: <a href="https://ucla.zoom.us/j/3430056826">https://ucla.zoom.us/j/3430056826</a>
                    <div className="osp">
                        <OSPWrapper class="osp2_wrapper">
                            <OSPContentWrapper>
                                <OSPContentDay label="april 25, 2022" id="first_osp_label">
                                    <OSPEvent time="5-6p.m." label="Choosing a college" desc="Choosing between multiple colleges? We've been there! Come chat with fellow RSSers about what to consider when selecting your home for the next four years, and learn about why we ultimately chose UCLA!"/>
                                </OSPContentDay>
                                <OSPContentDay label="april 26, 2022" id="first_osp_label">
                                    <OSPEvent time="6-7p.m." label="Academics" desc="Learn about the academic culture, whether it's the rigor of classes, clubs, four-year graduation plans, or anything academically related!"/>
                                </OSPContentDay>
                                <OSPContentDay label="april 27, 2022" id="first_osp_label">
                                    <OSPEvent time="8-9p.m." label="Social Life" desc="Chat about the social scene at UCLA! We have people in RSS who are involved in countless different organizations and activites both on and off campus. There's something for everyone!"/>
                                </OSPContentDay>
                                <OSPContentDay label="april 28, 2022" id="first_osp_label">
                                    <OSPEvent time="4-5p.m." label="Housing" desc="UCLA offers some of the best dorms in the nation, along with the number one ranked dining halls. Come to chat about our recommend places to live and places to eat on campus!"/>
                                </OSPContentDay>
                                <OSPContentDay label="april 29, 2022" id="first_osp_label">
                                    <OSPEvent time="7-8p.m." label="Random!" desc="Talk with us about anything to do with RSS, UCLA, or the college experience in general!"/>
                                </OSPContentDay>

                            </OSPContentWrapper>

                        </OSPWrapper>
                    </div>

                    
                </TextPanel>

            </RSSPage>
        )
    }
}


function OSPWrapper(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

function OSPMountains(props) {
    return (
        <div className="osp_mountains">
            <img src={`/images/prospectives/${props.src}`} className="osp_mountains_img" alt="Mountains" />
        </div>
    )
}

function OSPHeading(props) {
    return (
        <div className="osp_heading">
            <div className="osp_heading_text">{props.name}</div>
            <hr className="osp_heading_line" />
        </div>
    )
}

function OSPContentWrapper(props) {
    return (
        <div className="osp_content_wrapper">
            <div className="osp_content_image_wrapper"/>
            <div className="osp_content">
                {props.children}
            </div>
        </div>
    )
}

function OSPContentDay(props) {
    return (
        <div className="osp_content_day_wrapper" id={props.id}>
            <div className="osp_content_label">{props.label}</div>
            <div className="osp_content_itinerary_wrapper">
                {props.children}
            </div>
        </div>
    )
}

function OSPEvent(props) {
    return (
        <div className="osp_event_wrapper">
            <div className="osp_event_time">{props.time}</div>            
            <div className="osp_event_desc">
                <div className="osp_event_desc_heading">
                    {props.label}
                </div>
                {props.location !== undefined &&
                    <div className="osp_event_location">
                        {props.location}
                    </div>
                }
                <div className="osp_event_desc_desc">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

export default ProspectivesOld;