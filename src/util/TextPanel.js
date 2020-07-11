import React, { Component } from 'react';

import './textpanel.css'

/**
 * Creates a text panel with a black background
 * Specify heading in props, and include content within the <TextPanel> tag
 */
class TextPanel extends Component {
    render() {
        return (
            <div className="text-panel">
                <div className="text-panel-heading">{this.props.heading}</div>
                <div className="text-panel-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TextPanel;