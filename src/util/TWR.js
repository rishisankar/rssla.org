import React, { Component } from 'react';

import './osp.css';

class TWR extends Component {
    render() {
        return (
            <div className="osp">
                <OSPWrapper class="osp1_wrapper">
                    {/* <OSPMountains src="day_mountains.png" />
                    <OSPHeading name="twr"/> */}
                    <OSPCoordWrapper>
                        <OSPCoord
                            name="Elizabeth Hartwell"
                            year="4th year"
                            major="Political Science"
                            img="elizabeth.png"
                        >
                            Elizabeth Hartwell is a fourth year Political Science major from Glendora, CA. She chose UCLA 
                            because she was inspired by her Mexican immigrant mother who also attended UCLA. LA has always 
                            been home and she wanted a place where she could explore her political aspirations while continuing 
                            to challenge herself academically in an inclusive space. She also admired the strong transfer 
                            community on campus and wanted to help grow that positive environment. Elizabeth plans to run 
                            for U.S. Congress one day to bring representation to the Latinx and LGBTQ+ communities.
                        </OSPCoord>
                        <OSPCoord
                            name="Arturo Bustos Ochoa"
                            year="3rd year"
                            major="Sociology"
                            img="arturo.png"
                        >
                            Arturo Bustos Ochoa is a third year Sociology Major and Chicana and Chicano Studies Minor from 
                            San Diego, CA. Arturo chose UCLA for its proximity to his hometown. It was far enough for a change 
                            of scenery, and close enough to drive back home to. Growing up within 10 minutes from the beach, 
                            it was only right for him to choose a school that was near the beach as well. Additionally, it 
                            offered him the most financial aid and/or scholarships. Lastly, UCLA has a strong and supportive 
                            transfer community!
                        </OSPCoord>
                        <OSPCoord
                            name="Elina Chao"
                            year="3rd year"
                            major="Economics"
                            img="elina.png"
                            valign="40%"
                        >
                            Elina Chao is a third year Economics major minoring in Accounting. She is an American Born 
                            Taiwanese who grew up in Malaysia and knows 4 Languages -English, Mandarin, Malay, and Taiwanese!
                            Elina chose UCLA because it is her dream school. She is honored to go to a world-class institution 
                            which not only provides the best education but is also located in the heart of LA… practically in 
                            Beverly Hills where big movie stars live. She explains how UCLA is the best option for students 
                            like her who take school seriously but don’t want to sell their soul to academics! 
                        </OSPCoord>
                        <OSPCoord
                            name="Marilyn Martinez"
                            year="3rd year"
                            major="Sociology"
                            img="marilyn.png"
                            valign="40%"
                        >
                            Marilyn Martinez is a third year Sociology Major and Chicana and Chicano Studies Minor from Glendale, CA.
                            In all honesty, she says, she chose UCLA, because it is the number one public university in the United 
                            States, but also because the culture on campus is one of community and inclusion. While it is a highly 
                            rigorous and prestigious school, she has yet to come across someone who is not willing to help! Anyone 
                            on campus is so willing to answer questions and to share resources. Almost immediately after committing 
                            to UCLA she found her community and home! 
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

// function OSPMountains(props) {
//     return (
//         <div className="osp_mountains">
//             <img src={`/images/prospectives/${props.src}`} className="osp_mountains_img" alt="Mountains" />
//         </div>
//     )
// }

// function OSPHeading(props) {
//     return (
//         <div className="osp_heading">
//             <div className="osp_heading_text">{props.name}</div>
//             <hr className="osp_heading_line" />
//         </div>
//     )
// }

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

export default TWR;