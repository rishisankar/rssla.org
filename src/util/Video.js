import React, { Component } from "react";

import './video.css';

class Video extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <video controls id="myVideo">
                    <source src="/images/mask_making.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Video;