import React, { Component } from 'react';

import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <div className="social-media-icons">
                    <SocialMediaIcon 
                        iconClass="fab fa-instagram"
                        ml="10px"
                        mt="8.7px"
                        link="https://www.instagram.com/uclarss/"
                    />
                    <SocialMediaIcon 
                        iconClass="fab fa-facebook-f"
                        ml="12.4px"
                        mt="8.5px"
                        link="https://www.facebook.com/uclarss"
                    />
                    <SocialMediaIcon 
                        iconClass="fab fa-linkedin-in"
                        ml="10.3px"
                        mt="9.75px"
                        link="https://www.linkedin.com/company/rssla/about/"
                    />
                    <SocialMediaIcon 
                        iconClass="far fa-envelope"
                        ml="8.8px"
                        mt="8.8px"
                        link="mailto:president@rssla.org"
                    />
                </div>

                <div className="copyright-information">
                    &#169; 2020, Regents Scholar Society, UCLA. All rights reserved.<br/>
                </div>
            </div>
        )
    }
}

function SocialMediaIcon(props) {
    const ml = props.ml != null ? props.ml : "0px";
    const mt = props.mt != null ? props.mt : "0px";
    const style = {
        marginLeft: ml,
        marginTop: mt
    };

    return (
        <a className="footer-social-media-link" href={props.link} target="_blank" rel="noopener noreferrer">
            <i class={props.iconClass} style={style}/>
        </a>
    );
}

export default Footer;