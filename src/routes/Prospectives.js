import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import OSP from '../util/OSP';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives.css';

class Prospectives extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        return (
            <RSSPage className="prospectives">
                <Banner 
                    text="prospectives" 
                    bgr="/images/prospectives/banner.png"
                    darkness="0.2"
                    valign="65%"
                />

                <ProspectivesIntro width={this.state.width} />

                <div className="welcome_wrapper">
                    <h2 className= "welcome_header"> welcome to our overnight stay program!</h2> 
                    <div className= "welcome_to_osp">
                        Congratulations on receiving the Regents Scholarship! The overnight stay program (OSP) provides prospectives a valuable opportunity to learn 
                        more about the Regents Scholar Society and UCLA. This year, the RSS OSP Coordinators have planned an interactive online experience.
                        A key aspect of every OSP includes Q&amp;A panels for academics and campus life, social activities, and more. In order to get the full OSP experience, 
                        we highly recommend you arrange your schedule to let you attend the session from beginning to end. We're excited to see you! 
                    </div>
                </div>
               
                <OSP />

                <TextPanel heading="contact us!">
                    asdf
                </TextPanel>
            </RSSPage>
        )
    }
}

class ProspectivesIntro extends Component {
    render() {
        if (this.props.width >= 900) {
            return this.renderLarge();
        } else {
            return this.renderSmall();
        }
    }

    renderLarge() {
        return (
            <React.Fragment>
                <TextPanel heading="we are rss" id="we-are-rss-panel">
                    <div className="we_are_rss_wrapper">
                        <div className="benefits_list">
                            The Regents Scholar Society at UCLA, or RSS, offers membership to everyone who has received the
                            Regents Scholarship.
                            The scholarship is offered to those at the top of each incoming class, but 
                            we're more than just smart -- we're kind, ambitious, passionate, funny, driven, and 
                            maybe a little eccentric. Most importantly, we're a diverse group who are here to 
                            welcome you to UCLA with open arms and open hearts.
                            <br /><br />
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
                        </div>
                        <div className='letter_wrapper'>
                            <div className="evp_letter_header">
                                a letter from our external vice president
                            </div>
                            <div className="evp_letter_body">
                                Dear prospective RSSer,
                                <br/><br/>
                                Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and OSP!
                                We are extremely excited to have you in our OSP, and can't wait to meet you virtually.
                                <br/><br/>
                                In these three days, you'll learn what college, UCLA, and RSS are all about — on top of meeting 
                                some lifelong friends and even potentially future roommates! If you have any questions about college, 
                                and I mean any — this is the place to have them answered. We look forward to meeting you soon!
                            </div>
                            <div className="evp_letter_signature">- Rebecca Zhu</div>
                            <div className="evp_letter_title">
                                External Vice President
                            </div>
                        </div>
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

    renderSmall() {
        return (
            <React.Fragment>
                <TextPanel heading="we are rss" id="we-are-rss-panel">
                    The Regents Scholar Society at UCLA, or RSS, offers membership to everyone who has received the
                    Regents Scholarship.
                    The scholarship is offered to those at the top of each incoming class, but 
                    we're more than just smart -- we're kind, ambitious, passionate, funny, driven, and 
                    maybe a little eccentric. Most importantly, we're a diverse group who are here to 
                    welcome you to UCLA with open arms and open hearts.
                    <br /><br />
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
                <TextPanel heading="a letter from our external vice president" id="small-letter-panel">
                    <div className="evp_letter_body">
                        Dear prospective RSSer,
                        <br/><br/>
                        Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and OSP!
                        We are extremely excited to have you in our OSP, and can't wait to meet you virtually.
                        <br/><br/>
                        In these three days, you'll learn what college, UCLA, and RSS are all about — on top of meeting 
                        some lifelong friends and even potentially future roommates! If you have any questions about college, 
                        and I mean any — this is the place to have them answered. We look forward to meeting you soon!
                    </div>
                    <div className="evp_letter_signature">- Rebecca Zhu</div>
                    <div className="evp_letter_title">
                        External Vice President
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

}

export default Prospectives;