import React, { Component } from 'react';

import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-title">
                    <img src="/images/rss_logo.png" alt="rss logo" className="header-logo"/>
                </div>
                <div className="nav-bar-wrapper">
                    <NavBox label="about" link="about" />
                    <NavBox label="gallery" link="gallery" />
                    <NavBox label="prospectives" link="prospectives" />
                    <NavBox label="contact us" link="contact" />
                    <NavBox label="log in" link="login" />
                </div>
            </div>
        )
    }
}

class NavBox extends Component {
    render() {
        return (
            <div className="nav-box">
                {this.props.label}
            </div>
        )
    }
}

export default Header;