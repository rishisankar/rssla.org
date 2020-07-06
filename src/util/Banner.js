import React, { Component } from 'react';

import './banner.css'

/**
 * Adds a banner image with a text overlay, useful for the top of each page.
 * 
 * Sample Usage (home page):
 * <Banner
 *  text="this is rss"  (main text, not required)
 *  subtext="regents scholar society at ucla" (subtext, not required) 
 *  bgr="/images/2019_Conference.jpg" (image source, required)
 *  darkness="0.1" (darkness level 0-1, 0 brightest & default)
 *  valign="65%" (vertical alignment of image, 50% center & default)
 * />
 */

class Banner extends Component {
    render() {
        const darkness = this.props.darkness == null ? 0 : this.props.darkness;
        const valign = this.props.valign == null ? 0.5 : this.props.valign;
        const bannerStyle = {
            background: `linear-gradient(rgba(0,0,0,${darkness}),rgba(0,0,0,${darkness})),url(${this.props.bgr})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `50% ${valign}`,
            backgroundSize: "cover"
        };
        
        return (
            <div className="banner" style={bannerStyle}>
                <div className="banner-heading">
                    <div className="banner-main-heading">{this.props.text}</div>
                    <div className="banner-sub-heading">{this.props.subtext}</div>
                </div>
            </div>
        )
    }
}

export default Banner;