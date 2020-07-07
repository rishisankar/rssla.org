import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './header.css'

/**
 * Nav bar at the top of each page
 */
class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-title">
                    <img src="/images/rss_logo.png" alt="rss logo" className="header-logo"/>
                </div>
                <div className="nav-bar-wrapper">
                    <ExpandableNavBox 
                        label="about" 
                        link={null} 
                        options={[{label: "programs", to: "programs"},
                                  {label: "committees", to: "committees"},
                                  {label: "board", to: "board"},
                                  {label: "sponsors", to: "sponsors"}
                                ]}
                    />
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
            <Link 
                    className="nav-box-link"
                    to={this.props.link}
                >
            <div className="nav-box">
                
                    {this.props.label}
            </div>
                </Link>
        )
    }
}

class ExpandableNavBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    setOpen(open) {
        this.setState({open: open});
    }

    render() {        
        return (
            <div className="nav-box expandable" 
                onMouseEnter={() => this.setOpen(true)}
                onMouseLeave={() => this.setOpen(false)}    
            >
                {this.props.label}
                &nbsp;
                <i class="navicon fas fa-chevron-down"/>
                
                {this.state.open ?
                    <div className="nav-box-expanded">
                        {this.props.options.map((item, i) =>
                            <Link className="nav-box-link" to={item.to}>
                                <div className="nav-box-expanded-item">
                                    {item.label}
                                </div>
                            </Link>
                        )}
                    </div>
                : null}
            </div>
        )
    }
}

export default Header;