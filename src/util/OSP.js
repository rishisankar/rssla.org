import React, { Component } from 'react';

import './osp.css';

class OSP extends Component {
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp1_wrapper">
                    <OSPMountains src="day_mountains.png" />
                    <OSPHeading name="osp 1"/>
                    <OSPContentWrapper src="day_mountains.png" >
                        <OSPContentDay label="april 2, 2021" id="first_osp_label">
                            <OSPEvent
                                time="4:30pm"
                                label="meet and greet"
                                desc="Time to meet your Coordinators and fellow prospective Regents Scholars!
                                    We will be going into some breakout rooms for fun icebreakers!"
                            />
                            <OSPEvent
                                time="5:30pm"
                                label="academic panel"
                                desc="Talk to a panel of current Regents Scholars to hear about their academic journey at
                                    UCLA including enrollment, classes, networking, and any other topics you would like!
                                "
                            />
                            <OSPEvent
                                time="6:30pm"
                                label="dinner"
                                desc="Go enjoy your dinner!  The coords will be on Discord if anyone wants to drop in!"
                            />
                            <OSPEvent
                                time="8:00pm"
                                label="meet your host"
                                desc="Get to know your RSS host and ask them any questions you have about UCLA life!"
                            />
                            <OSPEvent
                                time="9:30pm"
                                label="game night"
                                desc="Hang out with your host, relax, or come join us in a wide variety of 
                                    traditional OSP late-night games!"
                            />
                        </OSPContentDay>
                        <OSPContentDay label="april 3, 2021">
                            <OSPEvent
                                time="10:00am"
                                label="check-in"
                                desc="Are you ready for a full day of activities?  Before we start, here is 
                                    a quick chance to get to know everyone better!"
                            />
                            <OSPEvent
                                time="10:30am"
                                label="campus tour"
                                desc="Virtually tour UCLA’s beautiful campus. Learn Bruin secrets as we explore 
                                    North campus, South campus and everything in between."
                            />
                            <OSPEvent
                                time="11:30am"
                                label="post-campus tour game"
                                desc="Test your new knowledge on UCLA’s campus and history!  Who’s the true Bruin?"
                            />
                            <OSPEvent
                                time="12:30pm"
                                label="lunch"
                                desc="Independent meal time. If you’re feeling up to it, hang out with current 
                                    Regents Scholars on Discord!"
                            />
                            <OSPEvent
                                time="1:30pm"
                                label="campus life panel"
                                desc="Hear from some current Regents Scholars about anything you want to know
                                    about campus life to prepare for when we are back in person!"
                            />
                            <OSPEvent
                                time="3:00pm"
                                label="scavenger hunt"
                                desc="Scour your house for interesting items to show your newfound friends."
                            />
                            <OSPEvent
                                time="4:00pm"
                                label="break"
                                desc="Rest your eyes, take a break!"
                            />
                            <OSPEvent
                                time="5:00pm"
                                label="dorm tour"
                                desc="Virtually tour the different types of student dorms on the Hill, the center 
                                    of UCLA’s residential life."
                            />
                            <OSPEvent
                                time="6:00pm"
                                label="dinner"
                                desc="Join your coordinators in sweating over Buldak 2x Spicy Chicken Ramen, or
                                    just enjoy the show as you eat your regular dinner."
                            />
                            <OSPEvent
                                time="8:00pm"
                                label="arts and crafts"
                                desc="Get in touch with your creative side and join us for a relaxing evening of arts and crafts."
                            />
                            <OSPEvent
                                time="9:30pm"
                                label="game night"
                                desc="Enjoy some games or rest after a long, fun-filled day."
                            />
                        </OSPContentDay>
                        <OSPContentDay label="april 4, 2021">
                            <OSPEvent
                                time="10:00am"
                                label="check-in"
                                desc="Reflect on the past two days with your group before OSP comes to a close."
                            />
                            <OSPEvent
                                time="10:30am"
                                label="faculty in residence chat"
                                desc="Chat with faculty in residence and hear about their experiences living at UCLA! "
                            />
                            <OSPEvent
                                time="12:00pm"
                                label="goodbyes"
                                desc="All good things must end, and now it’s time to say goodbye. We hope you enjoyed your
                                    time with us, and we look forward to seeing you in the fall. Go Bruins!! The Discord 
                                    will remain active for all of your questions and various needs."
                            />
                        </OSPContentDay>
                    </OSPContentWrapper>
                    <OSPCoordWrapper>
                        <OSPCoord
                            name="Alvin Liu"
                            year="1st year"
                            major="Mathematics"
                            img="alvin.jpg"
                            valign="15%"
                        >
                            To the prospective Regents Scholar reading this: congratulations, and welcome to UCLA! My name is 
                            Alvin Liu, and I am a first-year Math major from the Bay Area.
                            <br/><br/>
                            Although my time here was not all 
                            what I had expected, I hope that as one of your coordinators I will be able to aid you in your 
                            decision and show you all there is to love about our school!
                            <br/><br/>
                            Besides serving as an RSS committee 
                            member, I am an assistant instructor at the Olga Radko Endowed Math Circle, work with School on 
                            Wheels to tutor homeless children, and was briefly involved in the UCLA quizbowl team. In my free 
                            time, I enjoy playing cello, folding origami, and watching anime. Consequently, I mostly listen 
                            to classical music and J-pop. I’m looking forward to meeting you all!
                        </OSPCoord>
                        <OSPCoord
                            name="Joy Lee"
                            year="2nd year"
                            major="Psychobiology"
                            img="joy.jpeg"
                            size="150%"
                            halign="50%"
                        >
                            Hello! Congratulations on receiving the Regents Scholarship! My name is Joy Lee, and I’m excited 
                            to be one of your OSP 1 coords. I am a second year Psychobiology major on the pre-med track, and 
                            I aspire to become a pediatric oncologist.
                            <br/><br/>
                            Some of my main involvements include raising awareness 
                            for pediatric cancer with BFPC, mentoring kids in STEM through hands-on science experiments, and 
                            working as a pediatric cancer undergraduate research assistant at the David Geffen School of 
                            Medicine.
                            <br/><br/>
                            In my free time, you’ll catch me playing volleyball, exploring new music, or hanging 
                            out at the beach/Disneyland with my friends (ofc pre-covid). I hope that you guys will have an 
                            amazing time at OSP, and I can’t wait to meet all of you there!
                        </OSPCoord>
                        <OSPCoord
                            name="Karine Kim"
                            year="2nd year"
                            major="Physiological Science/Anthropology"
                            img="karine.jpeg"
                            halign="25%"
                        >
                            Hi prospies! Huge congrats on your admission to UCLA as Regents Scholars!  My name is Karine 
                            and I am so excited to be one of your OSP coordinators!  I am a second-year Physiological Science 
                            and Anthropology double major from San Diego and I aspire to be a physician in the future. 
                            <br/><br/>
                            Outside of OSP, you can find me mentoring fifth graders through hands-on STEM activities in a 
                            club called BEAM, connecting with my Japanese roots through the UCLA chapters of Nikkei Student 
                            Union and Japanese Student Association, and working as an undergraduate researcher in a lab 
                            studying memory consolidation in sleep and its impacts on post-traumatic stress disorder. 
                            <br/><br/>
                            In whatever free time I have, I love watching Netflix, dancing, and drinking way too much 
                            iced coffee. I hope that I can introduce you to everything UCLA has to offer and I look forward 
                            to getting to know all of you in OSP 1!
                        </OSPCoord>
                        <OSPCoord
                            name="Daniel Kao"
                            year="1st year"
                            major="Linguistics/Computer Science"
                            img="daniel.jpg"
                            valign="40%"
                        >
                            Congratulations to all prospective Regents Scholars, and welcome to UCLA! My name is Daniel 
                            Kao, and I am a first year Linguistics and Computer Science major from LA.
                            <br/><br/>
                            Currently, I’m a member of the Japan-America Language and Culture Club and a Chinese tutor 
                            for the Bruin Polyglot Society. I’ve also joined School on Wheels, where I am in the 
                            process of becoming a tutor for children struggling with homelessness. 
                            <br/><br/>
                            In my free time, I like to study languages, read novels, 
                            and relax through online games. While my first quarters at UCLA were certainly out of the norm, 
                            RSS provided an amazing, supportive community that made me feel welcome. As an OSP coordinator, 
                            I hope to share my experiences navigating college online with you, and I’m looking forward to 
                            meeting everyone at OSP!
                        </OSPCoord>
                    </OSPCoordWrapper>
                </OSPWrapper>
            </div>
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
                <div className="osp_event_desc_desc">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

function OSPCoordWrapper(props) {
    return (
        <div className="osp_coord_wrapper">
            <div className="osp_coord_header">meet your coordinators!</div>
            <div className="osp_coord_flexbox">
                {props.children}
            </div>
        </div>
    )
}

function OSPCoord(props) {
    const halign = props.halign == null ? "0%" : props.halign;
    const valign = props.valign == null ? "0%" : props.valign;
    const size = props.size == null ? "cover" : props.size;
    const imgStyle = {
        backgroundImage: `url(/images/prospectives/osp_headshots/${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${halign} ${valign}`,
        backgroundSize: size
    }
    return (
        <div className="osp_profile">
            <div className="osp_profile_img" style={imgStyle} />
            <div className="osp_profile_name">{props.name}</div>
            <div className="osp_profile_year">{props.year}</div>
            <div className="osp_profile_major">{props.major}</div>
            <div className="osp_profile_desc">{props.children}</div>
        </div>
    )
}

export default OSP;