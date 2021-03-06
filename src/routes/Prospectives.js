import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
// import OSP from '../util/OSP';
import TWR from '../util/TWR';
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
                    <h2 className= "welcome_header"> welcome to our transfer welcome week!</h2> 
                    <div className= "welcome_to_osp">
                    Congratulations on receiving the Regents Scholarship! We originally intended to welcome you and other prospective 
                    RSS transfers with an in-person reception and a two-day overnight program at UCLA. However, due to COVID-19, we 
                    have had to adjust our plans. Instead, we will be holding a virtual welcome week, starting 
                    Tuesday, May 17 - Friday, May 21, where you can learn all about your scholarship, the society, and UCLA by 
                    interacting with other prospective and current Regents Scholars! We are so excited to meet you!
                    </div>
                </div>
               
                <TWR />

                <TextPanel heading="contact us!">
                    <div className="osp_contact_wrapper">
                        {/*
                        <div className="osp_contact_name">Rebecca Zhu</div>
                        <div className="osp_contact_email">
                            <a className="osp_contact_email_link" href="mailto:evp@rssla.org">evp@rssla.org</a>
                        </div>
                        */}
                        <div className="osp_contact_name">Michelle Garabetian</div>
                        <div className="osp_contact_email">
                            <a className="osp_contact_email_link" href="mailto:transfers@rssla.org">transfers@rssla.org</a>
                        </div>
                    </div>
                    <img className="osp_contact_img" src="/images/prospectives/contact_banner.png" alt="mountains"/>
                </TextPanel>
            </RSSPage>
        )
    }
}

/* freshman version

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

*/

/* transfer version */
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
                                    desc="A $2,000 honorarium, awarded quarterly for four years for freshmen/two years for transfers.
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
                                    heading="2"
                                    subheading="years"
                                    desc="Two years of university housing upon submission of the Housing application. 
                                        Additionally, a parking pass upon submission of the Parking application."
                                    bgr="house.png"
                                    scale="90%"
                                />
                            </BenefitWrapper>
                        </div>
                        <div className='letter_wrapper'>
                            <div className="evp_letter_header">
                                a letter from our transfer affairs director
                            </div>
                            <div className="evp_letter_body">
                                Dear prospective RSSer,
                                <br/><br/>
                                Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and TWR! 
                                We are extremely excited to have you join us during our RSS Transfer Welcome Week (May 18 - May 21), 
                                and can't wait to meet you virtually.
                                <br/><br/>
                                During these four days, you'll learn about the transfer process, and what UCLA and RSS are all 
                                about — on top of meeting some lifelong friends and even potentially future roommates! If you have 
                                any questions about UCLA or anything transfer related, and I mean any — this is the place to have 
                                them answered. We look forward to meeting you soon!
                            </div>
                            <div className="tad_letter_signature">- Michelle Garabetian</div>
                            <div className="evp_letter_title">
                                Transfer Affairs Director
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
                            desc="A $2,000 honorarium, awarded quarterly for four years for freshmen/two years for transfers.
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
                            heading="2"
                            subheading="years"
                            desc="Two years of university housing upon submission of the Housing application. 
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
                        Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and TWR! 
                        We are extremely excited to have you join us during our RSS Transfer Welcome Week (May 18 - May 21), 
                        and can't wait to meet you virtually.
                        <br/><br/>
                        During these four days, you'll learn about the transfer process, and what UCLA and RSS are all 
                        about — on top of meeting some lifelong friends and even potentially future roommates! If you have 
                        any questions about UCLA or anything transfer related, and I mean any — this is the place to have 
                        them answered. We look forward to meeting you soon!
                    </div>
                    <div className="tad_letter_signature">- Michelle Garabetian</div>
                    <div className="evp_letter_title">
                        External Vice President
                    </div>
                </TextPanel>
            </React.Fragment>
        )
    }

}

export default Prospectives;