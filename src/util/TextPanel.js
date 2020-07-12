import React, { Component } from 'react';

import './textpanel.css'

/**
 * Creates a text panel with a black background
 * Specify heading in props, and include content within the <TextPanel> tag
 */
function TextPanel(props) {
    return (
        <div 
            className={`text-panel ${props.align}`}
            id={props.id} 
            style={props.height == null ? null : {height: props.height}}
        >
            <div className="text-panel-heading">{props.heading}</div>
            <div className="text-panel-content">
                {props.children}
            </div>
        </div>
    )
}


/**
 * Creates a text panel with a black background as 40%, with an image
 * for the other 60% of screen width
 */
class ImageTextPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 60%"
        }
        return (
            <div className="img-text-panel-wrapper">
                {(this.props.align === "left" || this.state.width <= 840) ?
                    <React.Fragment>
                        <TextPanel 
                            heading={this.props.heading}
                            id={this.props.id}
                            height={this.props.height}
                            align="left"
                        >
                            {this.props.children}
                        </TextPanel>
                        <div className="img-text-panel-img-wrapper"  style={imgStyle} /> 
                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className="img-text-panel-img-wrapper"  style={imgStyle} /> 
                        <TextPanel 
                            heading={this.props.heading}
                            id={this.props.id}
                            height={this.props.height}
                            align="right"
                        >
                            {this.props.children}
                        </TextPanel>
                    </React.Fragment> 
                }
            </div>
        )
        
    }
}

export {TextPanel, ImageTextPanel}