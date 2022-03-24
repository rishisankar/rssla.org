import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Papa from 'papaparse'
import { useCSVReader } from 'react-papaparse';

import './osp.css';

class OSP extends Component {

    constructor(props) {
        super(props);

        this.state = {
            virtual: [],
            inPerson: [],
        };

        this.getVirtual = this.getVirtual.bind(this)
        this.getInPerson = this.getInPerson.bind(this)
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

    getVirtual(result) {
        this.setState({virtual: result.data});
    }

    getInPerson(result) {
        console.log("entered get in = person")
        console.log(result)
        this.setState({inPerson: result.data})
    }

    async getCSVData() {
        let inPersonData = await this.fetchCSVData('/osp_inperson.csv')
        let virtualData = await this.fetchCSVData('/osp_virtual.csv');

        Papa.parse(inPersonData, {
            complete: this.getInPerson
        });

        Papa.parse(virtualData, {
            complete: this.getVirtual
        });

    }

    componentDidMount() {
        console.log("component did mount")
        console.log(this.state);
    }
    
    
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp1_wrapper">
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
                </OSPWrapper>
                <OSPWrapper class="osp2_wrapper">
                    <OSPMountains src="night_mountains.png" />
                    <OSPHeading name="osp virtual"/>
                    <OSPContentWrapper>
                        <OSPContentDay label="april 24, 2022" id="first_osp_label">
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
                            name="Cadence Chang"
                            year="1st year"
                            major="Computational and Systems Biology"
                            img="jaslyn.jpg"
                            valign="10%"
                        >
                            Hi guys! Congratulations on receiving the Regents Scholarship! My name is Cadence Chang, and I’m one of your coords this year! 
                            

                            <br/><br/>
                            I’m a first year Computational and Systems Biology major interested in attending medical school after undergrad. In my free time, I enjoy working out at BFit, getting boba at Sharetea, or hammocking in Sunset Village. On campus, I’m involved in the Radu Lab, AMWA, CMLA, ACM, and the Triathlon Club.
                            <br/><br/>
                            I’m also a member of the ACE and Special Events Committees for RSS, so you’ll probably see me around in the Discord! I’m super excited to meet all of you, so don’t hesitate to reach out with any questions and always feel free to “sling” by to say hi! :)

                        </OSPCoord>
                        <OSPCoord
                            name="Grace Chang"
                            year="1st year"
                            major="Physiological Science"
                            img="emika.jpg"
                            valign="20%"
                        >
                            Hello hello! I’m Grace, and I am a first year Physiological Science major looking to enter medicine in the (not so) near future. 
                            <br/><br/>
                            Outside of class, I enjoy nature photography (PS, the crab-eating macaque is the best model you’ll ever encounter), food hunting with my friends, MBTI, and creating Spotify playlists. On campus, I’m involved with the RSS A.C.E Committee, Alumni Scholars Club, Bruin Vision Project, and soon an ophthalmology research lab (yes, eyes are really cool). 
                            <br/><br/>
                            Congratulations on all you have accomplished so far, and I can’t wait to bring on the magic at OSP!
                        </OSPCoord>
                        <OSPCoord
                            name="Samuel Lu"
                            year="1st year"
                            major="Math of Computation"
                            img="teresa.jpg"
                            valign="40%"
                        >
                            Hi! I’m Samuel Lu, one of your five electrifying OSP coordinators :) I'm a first year math of computation major with a significant interest in computer science.
                            <br/><br/>
                            On campus I'm involved in the Association of Computer Machinery (ACM), the badminton club, as well as the Tech and Activities/Community/Education (ACE) committees of our very own Regents Scholar Society. Whenever I'm free I like to watch movies/sports, play cards/boardgames, hammer out on the piano, and explore the sprawling, eclectic city that is Los Angeles.
                            <br/><br/>
                            I'm super excited to meet all of you and show you how strikingly beautiful UCLA is! Feel free to hit me up anytime if you want to talk about college or music!
                        </OSPCoord>
                        <OSPCoord
                            name="Tiffany Mok"
                            year="1st year"
                            major="Business Economics"
                            img="lexi.jpg"
                            halign="45%"
                        >
                            Hi prospies :) My name is Tiffany, and I am a first-year Business Economics major from Daly City, California (right next to SF).
                            <br/><br/>
                            I am involved in multiple organizations on campus, from RSS to the Undergraduate Business Society to the Association of Chinese Americans. When I am not studying, you will most likely find me roaming around campus or finding new places to spontaneously explore. I love to travel, watch Bay Area sports, and eat good food (especially desserts!).
                            <br/><br/>
                            If you ever have any questions, don’t be shy and please reach out! I am so stoked to meet you, and I hope you all have an incredible time at OSP! 
                        </OSPCoord>
                        <OSPCoord
                            name="Estrella Rico"
                            year="1st year"
                            major="Music History and Industry"
                            img="lexi.jpg"
                            halign="45%"
                        >
                            Hello and congratulations on receiving the Regents Scholarship! My name is Estrella Rico, a first-generation college student from Santa Barbara. I am a first-year Music History and Industry major with a tentative Entrepreneurship minor!                            
                            <br/><br/>
                            I am currently involved in a beginning mariachi group here at UCLA, I am Volunteer Research Assistant in Multicultural Praxis Lab, and, of course, I am a member of RSS! Apart from classes and extracurriculars, you will usually find me trying new foods, making Spotify playlists with extremely specific titles, binge-watching Love Island UK, or listening to podcasts.
                            <br/><br/>
                            Feel free to ask me any questions on committing to UCLA as a first-generation college student and how RSS has impacted my experience here at UCLA! I can’t wait for OSP 2022 to be a smash!                        </OSPCoord>
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
            {console.log(props.location)}
            
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