import React, { Component } from 'react';

import './osp.css';

class OSP extends Component {
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp1_wrapper">
                    <OSPMountains src="day_mountains.png" />
                    <OSPHeading name="osp 1"/>
                    <OSPContentWrapper>
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
                <OSPWrapper class="osp2_wrapper">
                    <OSPMountains src="night_mountains.png" />
                    <OSPHeading name="osp 2"/>
                    <OSPContentWrapper>
                        <OSPContentDay label="april 8, 2021" id="first_osp_label">
                            <OSPEvent
                                time="4:30pm"
                                label="check-in and meet and greet"
                                desc="Time to meet your Coordinators and fellow Scholars! We’ll be doing some icebreakers
                                    in breakout rooms! See a list of questions if you need a quick icebreaker!"
                            />
                            <OSPEvent
                                time="5:30pm"
                                label="academic life panel"
                                desc="Talk to a panel of current Regents Scholars to hear about their academic journey 
                                    at UCLA including enrollment, classes, networking, and any other topics you would like!"
                            />
                            <OSPEvent
                                time="6:30pm"
                                label="dinner break"
                                desc="Take a screen break and get a bite to eat! The Zoom room will be open if you want to 
                                    chat with fellow prospies and current RSSer's."
                            />
                            <OSPEvent
                                time="8:00pm"
                                label="meet your host"
                                desc="Join a breakout room and get to know your OSP host. Ask them about major/department 
                                    specific questions or anything about the college experience! "
                            />
                            <OSPEvent
                                time="8:15pm"
                                label="speed dating bingo"
                                desc="Grab your bingo sheet and try to win a prize while getting to know other prospies 
                                    and RSSer's. You will be randomly sorted into breakout rooms to ask questions based 
                                    on your bingo sheet. If you think you have bingo, shout it out or type it in the main
                                    room chat!"
                            />
                            <OSPEvent
                                time="9:00pm"
                                label="game night"
                                desc="Take your pick of a variety of games, chill in the main Zoom, or head out for the
                                    night! Before you go, make sure you sign up for class shadowing!"
                            />
                        </OSPContentDay>
                        <OSPContentDay label="april 9, 2021">
                            <OSPEvent
                                time="10:00am"
                                label="check-in"
                                desc="Are you ready for a full day of activities?  Before we start, here is a quick 
                                    chance to get to know everyone better!"
                            />
                            <OSPEvent
                                time="10:30am"
                                label="class shadowing"
                                desc="Get a taste of Zoom college!"
                            />
                            <OSPEvent
                                time="1:30pm"
                                label="lunch"
                                desc="Independent meal time. If you’re feeling up to it, hang out with current Regents Scholars on Discord!"
                            />
                            <OSPEvent
                                time="3:00pm"
                                label="regroup and start virtual campus &amp; dorm tour"
                                desc="Virtually tour UCLA’s beautiful campus. Learn Bruin secrets as we explore North campus, 
                                    South campus and everything in between."
                            />
                            <OSPEvent
                                time="4:30pm"
                                label="tea/coffee break"
                                desc="Take a screen break. Optionally, join us for a Zoom chat over tea and coffee."
                            />
                            <OSPEvent
                                time="5:30pm"
                                label="post-campus tour game"
                                desc="Test your new knowledge on UCLA’s campus and history! Win a prize! Who’s the true
                                    Bruin?"                               
                            />
                            <OSPEvent
                                time="6:00pm"
                                label="campus life/club panel"
                                desc="Hear from some current Regents Scholars about anything you want to know about 
                                    campus life to prepare for when we are back in person!"
                            />
                            <OSPEvent
                                time="7:00pm"
                                label="dinner"
                                desc="Join your coordinators in sweating over Buldak 2x Spicy Chicken Ramen, or 
                                    just enjoy the show as you eat your regular dinner."
                            />
                            <OSPEvent
                                time="8:00pm"
                                label="faculty in residence panel"
                                desc="Ask questions about campus life, academic, and school culture to our Faculty in Residence."
                            />
                            <OSPEvent
                                time="9:30pm"
                                label="game night"
                                desc="Enjoy some games or rest after a long, fun-filled day."
                            />
                        </OSPContentDay>
                        <OSPContentDay label="april 10, 2021">
                            <OSPEvent
                                time="10:00am"
                                label="check-in"
                                desc="Reflect on the past two days with your group before OSP comes to a close."
                            />
                            <OSPEvent
                                time="10:30am"
                                label="q&amp;a panel: decision making"
                                desc="Ask a panel of current Regents Scholars any remaining questions you have 
                                    about Regents, college life, academics, or any other topic."
                            />
                            <OSPEvent
                                time="12:00pm"
                                label="goodbyes"
                                desc="All good things must end, and now it’s time to say goodbye. We hope you enjoyed 
                                    your time with us, and we look forward to seeing you in the fall. Go Bruins!! 
                                    The Discord will remain active for all of your questions and various needs."
                            />
                        </OSPContentDay>
                        <OSPContentDay label="april 11, 2021">
                            <OSPEvent
                                time="2:00pm"
                                label="housing workshop"
                                desc="The housing application just opened! While we are not affiliated with UCLA Housing, 
                                    we've got a lot of experience from living in the dorms. This workshop will be on Sunday, 
                                    April 11th, from 2-3PM. We'll go over the different housing styles, meal plans, building 
                                    names, and dorm life! COVID has certainly contributed to making the UCLA Housing 
                                    experience very topsy-turvy, so we'll figure this out together :)"
                            />
                            <OSPEvent
                                time="3:00pm"
                                label="rss family panel"
                                desc="In normal times, RSS would host a Bruin Day Reception for you and your families.
                                    While we are unable to meet in person this year, we would still like to extend an 
                                    e-invitation to you and your families to join us on Sunday, April 11th, from 3-5PM, 
                                    to talk with a panel of Regents Scholar upperclassmen about their time at UCLA. If 
                                    you were unable to attend OSP, or your families would like to get to know us and ask 
                                    questions, or you miss seeing our faces, please come!"
                            />
                            <OSPEvent
                                time=""
                                label=""
                                desc="*For the housing workshop and family panel, you should have received an 
                                    email from ivp@rssla.org with the Zoom registration information - feel free to 
                                    contact this email with any questions/concerns!"
                            />
                        </OSPContentDay>
                    </OSPContentWrapper>
                    <OSPCoordWrapper>
                        <OSPCoord
                            name="Jaslyn Brar"
                            year="2nd year"
                            major="Chemical Engineering"
                            img="jaslyn.jpg"
                            valign="10%"
                        >
                            Welcome to UCLA and congratulations on becoming a Regents Scholar! I'm Jaslyn Brar and 
                            I'm a second-year Chemical Engineering major from Cerritos, California. 
                            <br/><br/>
                            I am currently a project lead and member of UCLA's chapter of American Institute of Chemical 
                            Engineers, where I design projects for members to participate in and learn more about engineering. 
                            <br/><br/>
                            I love pennyboarding, going to the beach, baking/cooking, gardening, and coffee brewing. 
                            I hope you have a great time at OSP!
                        </OSPCoord>
                        <OSPCoord
                            name="Emika Saito"
                            year="1st year"
                            major="Bioengineering"
                            img="emika.jpg"
                            valign="20%"
                        >
                            Hello, and congratulations on being selected as a Regents Scholar! My name is Emika Saito, and 
                            I am a first-year bioengineering major from Southern California.
                            <br/><br/>
                            In my free time, I love playing the piano, making desserts (and eating them), and playing 
                            tennis. 
                            <br/><br/>
                            As one of your OSP coordinators this year, I hope to give you a fun introduction to 
                            UCLA regardless of the virtual setting. While I can’t speak to as much of the in-person college 
                            life, I can certainly tell you about the enjoyable experiences I’ve had participating in 
                            clubs and school events, as well as making new friends, even with online classes. 
                            I’m looking forward to meeting everyone!
                        </OSPCoord>
                        <OSPCoord
                            name="Teresa Thomas"
                            year="2nd year"
                            major="Psychobiology"
                            img="teresa.jpg"
                            valign="40%"
                        >
                            Hi! My name is Teresa and I am from the San Fernando Valley in Los Angeles. I’m currently 
                            a second year Psychobiology Major that is also interested in the Global Health Minor! 
                            Right now, I’m on the pre-med track, hoping to pursue a career as a physician.
                            <br/><br/>
                            On campus, you can find me on the Executive Board for the Student Wellness Commission (SWC), 
                            educating the South Asian community about mental health through MannMukti, 
                            mentoring high school students in LAMP (Los Angeles Mentorship Program), 
                            and volunteering as an undergraduate researcher in a Pediatric Medicine clinical research lab!
                            <br/><br/>
                            In my free time, you can find me going out for food or boba, sending an absurd amount of 
                            tiktoks to my friends, and learning Korean. I can’t wait to meet you all and make your 
                            OSP experience as memorable as possible, even in a virtual setting!
                        </OSPCoord>
                        <OSPCoord
                            name="Lexi Massey"
                            year="1st year"
                            major="Physiological Science/Dance"
                            img="lexi.jpg"
                            halign="45%"
                        >
                            Hello there, and congratulations on becoming a Regents Scholar! My name is Lexi Massey and 
                            I am a first year student planning to double major in Physiological Science and Dance!
                            <br/><br/>
                            In my free time I love to dance (hence the choice of major), read for hours on end, 
                            do non-contact boxing, write pen pal letters, and try random recipes (ever heard of aquafaba mousse?)! 
                            I’ll be one of your OSP 2 coords and I can’t wait to meet you! 
                            <br/><br/>
                            Even though college didn’t start out the way any of us first years expected it to, I wouldn’t 
                            trade the experiences I’ve had so far for anything! I have found such an amazing community
                            here and hopefully you’ll get a taste of that at OSP! On behalf of the Regents Scholar 
                            Society, welcome to UCLA!
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