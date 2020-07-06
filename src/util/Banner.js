import React, { Component } from 'react';

import './banner.css'

class Banner extends Component {
    render() {
        const darkness = this.props.darkness == null ? 0 : this.props.darkness;
        const valign = this.props.valign == null ? 0.5 : this.props.valign;
        console.log(valign);
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
                    {this.props.subtext != null ? 
                        <div className="banner-sub-heading">{this.props.subtext}</div>
                    : null}
                </div>
            </div>
        )
    }
}

export default Banner;