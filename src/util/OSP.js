import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Papa from 'papaparse'
import { useCSVReader } from 'react-papaparse';

import './osp.css';

class OSP extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inPerson: [],
            virtual: []
        };

        this.getInPerson = this.getInPerson.bind(this);
        this.getVirtual = this.getVirtual.bind(this);
        this.getCSVData();
    }

    fetchCSVData(url) {
        return fetch(url).then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function(result) {
                return decoder.decode(result.value);
            });
        })
    }

    getInPerson(result) {
        this.setState({inPerson: result.data})
    }

    getVirtual(result) {
        this.setState({virtual: result.data})
    }

    async getCSVData() {
        let inPersonData = await this.fetchCSVData('osp_inperson.csv');

        Papa.parse(inPersonData, {
            complete: this.getInPerson
        });

        let virtualData = await this.fetchCSVData('osp_virtual.csv');

        Papa.parse(virtualData, {
            complete: this.getVirtual
        });

    }

    componentDidMount() {
        console.log(this.state);
    }
    
    
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp_itinerary_wrapper">
                    <OSPHeading name="osp itinerary"/>
                    <div className = "itinerary_pdf_container">
                        <object
                            data="osp_itinerary.pdf"
                            type="application/pdf"
                            width="100%"
                            height="600px"
                        >
                            <p>
                                Your browser does not support PDFs.
                            </p>
                        </object>
                    </div>
                </OSPWrapper>
                <OSPCoordWrapper>
                    <div className="group_photo">
                        <img 
                            src="/images/prospectives/groupphoto2.jpg" 
                            alt="Group Photo" 
                            width="75%" 
                            style={{border: '5px solid white'}}
                        />
                        <br/><br/>
                    </div>
                    <OSPCoord
                        name="Adrian Anaya"
                        year="1st year"
                        major="Chemical Engineering"
                        img="Adrian.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello all! My name is Adrian Anaya, and I am a first year Chemical Engineering major from Palmdale. I am excited to be one of the coords for this year’s OSP!
                        <br/><br/>
                        Outside of school and classes, you can often catch me reading, trying new foods, playing a wide variety of video games, hunting down Funkos for my collection, or just relaxing listening to music. My interests change pretty often, so I may pick up something new soon. As for UCLA, when not having fun with RSS I work with AIChE in technical projects, fence in our schools club fencing, or work as an assistant in a research lab within the Bioengineering department. RSS has amazing people in it, and I’m excited for you guys to meet them!
                        <br/><br/>
                        Congratulations on your acceptance to UCLA, and I’m excited to meet you all at OSP, see you soon!
                    </OSPCoord>
                    <OSPCoord
                        name="Scarlett Greenwood"
                        year="1st year"
                        major="Physics"
                        img="Scarlett.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hi! I’m Scarlett Greenwood, and I’m a first-year Physics major from Irvine. I’ll be one of your OSP Coords!
                        <br/><br/>
                        I’m involved in quite a bit across campus, but the freedom of college has taught me the importance of having time to myself and taking things easy. I love trying all of the different food options around the school—even though I’ve been here for two quarters already, there’s still so much to try! However, I still value academics and studying. In fact, I’ve just gotten involved in my first research lab, building an atomic clock!
                        <br/><br/>
                        On my own time, I enjoy creative writing, collecting, and watching obscure horror movies. With so much to do in the LA area, I also spend some special weekends going to new and fun places with my friends! Whatever you’re into, there’s something here for you.
                        <br/><br/>
                        I’m more than excited to meet you! Congratulations on your acceptance, and welcome to UCLA!

                    </OSPCoord>
                    <OSPCoord
                        name="Stephanie Nguyen"
                        year="1st year"
                        major="Neuroscience"
                        img="Stephanie.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello! I’m Stephanie Nguyen, a first-year neuroscience major from Torrance. I’m currently applying for a minor in biomedical research and am on the pre-med track too. At UCLA, I’m involved in a handful of volunteering organizations and am about to join my first research lab!
                        <br/><br/>
                        You’ll often find me wandering all over campus to find cozy places to study and relax. I also love birding, so that’s another reason why I’m walking around outside so much. Other than that, I enjoy playing rhythm games across all platforms, grinding out crossword puzzles late at night, and getting lost in Wikipedia rabbit holes.
                        <br/><br/>
                        I’m looking forward to welcoming you all into RSS and UCLA! Congratulations on your accomplishments and see you soon!
                    </OSPCoord>
                    <OSPCoord
                        name="Alex Hoe"
                        year="1st year"
                        major="Materials Science"
                        img="Alex.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hello everyone! My name is Alex, a 1st year materials science engineering major from Temple City, California, and I’m super excited to be one of your OSP Coordinators this year. A little bit about me- I love being outdoors whether it be exploring LA, spending the day at the beach, or just enjoying the day at Janss steps. I also love playing basketball, golf, the piano, guitar, and violin, snowboarding, skateboarding, and I’m always working on DIY projects in the makerspace. Congratulations on your acceptance, and I can't wait to meet everyone at OSP.
                    </OSPCoord>
                    <OSPCoord
                        name="Izzy Nuñez"
                        year="1st year"
                        major="Pre-Human Biology & Society"
                        img="Izzy.jpg"
                        halign="45%"
                        valign="20%"
                    >
                        Hey everyone! My name is Isabella Nuñez, but I go by Izzy. I’m a first-year Pre-Human Biology and Society major from Whittier, CA, and I’m super thrilled to be one of your coordinators this year!
                        <br/><br/>
                        In my free time, I love to read mystery novels or poetry books, cafe hop, write poetry and journal, listen to music, and watch sports! On campus, you can pretty much find me at the Buzz or Bookzone at Ackerman 24/7. Besides that, I enjoy attending football games as well as RSS events, venturing out into Westwood for study sessions, and having dinner in the dining halls with my fellow RSS roommate!
                        <br/><br/>
                        I can’t wait to meet all of you, and congratulations on your acceptance and Regents scholarship!
                    </OSPCoord>
                </OSPCoordWrapper>
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