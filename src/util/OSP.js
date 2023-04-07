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
                {/* <OSPWrapper class="osp1_wrapper">
                    <div>state</div>
                    <OSPMountains src="day_mountains.png" />
                    <OSPHeading name="osp in-person"/>
                    <OSPContentWrapper>
                        <OSPContentDay label="april 23, 2022" id="first_osp_label">
                            {this.state.inPerson.slice(1).map((arr) => {
                                return <OSPEvent
                                    time={arr[0]}
                                    label={arr[1]}
                                    location={arr[2]}
                                    desc={arr[3]}
                                />
                            })}
                        </OSPContentDay>
                    </OSPContentWrapper>
                </OSPWrapper> */}
                <OSPWrapper class="osp2_wrapper">
                    <OSPMountains src="night_mountains.png" />
                    <OSPHeading name="osp itinerary"/>
                    <OSPContentWrapper>
                        <OSPContentDay label="Saturday April 15th - In Person" id="first_osp_label">
                            {this.state.inPerson.slice(1).map((arr) => {
                                    return <OSPEvent
                                        time={arr[0]}
                                        label={arr[1]}
                                        desc={arr[2]}
                                    />
                                })}
                        </OSPContentDay>
                        <br></br>
                        <br></br>
                        <OSPContentDay label="Sunday April 16th - Virtual" id="first_osp_label">
                            {this.state.virtual.slice(1).map((arr) => {
                                    return <OSPEvent
                                        time={arr[0]}
                                        label={arr[1]}
                                        desc={arr[2]}
                                    />
                                })}
                        </OSPContentDay>
                    </OSPContentWrapper>
                    <OSPCoordWrapper>
                        <OSPCoord
                            name="Brianna Bayliss"
                            year="1st year"
                            major="Mechanical Engineering"
                            img="brianna.jpg"
                            valign="10%"
                        >
                            Hi! I am Brianna Bayliss, a first-year Mechanical Engineering Major from Orange County, CA.
                            <br/><br/>
                            I am constantly trying new things, but my current favorite pastimes are clay sculpting, painting, and being part of UCLA’s rocket competition team. Of course, none of those top the sheer joy I get from RSS events and being in a close-knit community of wonderfully kind, fun, and inspired students.
                            <br/><br/>
                            I look forward to meeting you all and I cannot congratulate you enough on this accomplishment! 

                        </OSPCoord>
                        <OSPCoord
                            name="Rebecca Lee"
                            year="1st year"
                            major="Biochemistry"
                            img="rebecca.jpg"
                            valign="20%"
                        >
                            Hey! My name is Rebecca, I’m a first-year biochemistry major, and I’m thrilled to be one of your coords for OSP.
                            <br/><br/>
                            Outside of RSS, I’m in SMACS (Student Members of the American Chemical Society), the Alumni Scholars Club, Con Brio String Orchestra, and I’m just starting to work in a biomolecular engineering lab. My hobbies include knitting, singing, skating, logic puzzles, and learning new things!
                            <br/><br/>
                            Congratulations on UCLA and Regents, and I’m so excited to meet you all!

                        </OSPCoord>
                        <OSPCoord
                            name="Shannon Shams"
                            year="1st year"
                            major="Physiological Science"
                            img="shannon.jpg"
                            valign="20%"
                        >
                            Hi everyone, my name is Shannon Shams, and I’m very excited to be one of your OSP coords this year!
                            <br/><br/>
                            I’m a first year, pre-med student majoring in Physiological Science, and I grew up in the San Fernando Valley here in LA. Outside of RSS, I’m involved in Bruins for Accessible Education (BAE), Building Engineers and Mentors (BEAM), Bruin Surgical Undergraduate Society (BSUS), and Matriculate at UCLA. For fun, I love listening to music, playing the guitar, watching the sunset at Janss Steps, visiting the Botanical Gardens, and attending all of RSS’s events.
                            <br/><br/>
                            I’m looking forward to meeting you all and showing you everything there is to take in from RSS and UCLA!
                        </OSPCoord>
                        <OSPCoord
                            name="Joshua Hockman"
                            year="1st year"
                            major="Biochemistry"
                            img="joshua.jpeg"
                            halign="45%"
                            valign="20%"
                        >
                            Howdy all, my name is Joshua Hockman and I’m a first year biochemistry major from Yorba Linda, CA and I’m very excited to be one of your coords!
                            <br/><br/>
                            Apart from class and RSS outings, you’ll typically find me at Intervarsity BCF and Grace on Campus events here at UCLA.  On weekends, I’m usually scattered somewhere in SoCal coaching a middle school Science Olympiad team.
                            <br/><br/>
                            I can’t wait to welcome you to our RSS family!

                        </OSPCoord>
                        <OSPCoord
                            name="Nyla Zia"
                            year="1st year"
                            major="Computer Science"
                            img="nyla.jpeg"
                            halign="45%"
                            valign="20%"
                        >
                            Hey everyone! My name is Nyla and I am so excited to welcome you all to RSS here at UCLA!
                            <br/><br/>
                            I am a first year Computer Science major from the Bay Area. Alongside RSS, I am a part of several engineering organizations such as ACM and SWE. Outside of academics, I love to dance, play ultimate frisbee on the giant IM field, and sing karaoke with my friends!
                            <br/><br/>
                            Congratulations on this achievement and I can’t wait for you to see how amazing both RSS and UCLA are!


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