import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './gallery.css';

/**
 * Sketch here: https://docs.google.com/drawings/d/1YOjLcmhI0-76WZSH_s9v_oKURaBey0Y8YCX0oWPcanI/edit?usp=sharing
 *                             <img src="/images/gallery/2020_retreat_bridge.jpg" alt="2020 retreat bridge" />
                            <img src="/images/gallery/2019_game_night.JPG" alt="2019 game night" />
                            <img src="/images/gallery/2020_retreat_kitchen.JPG" alt="2020 retreat kitchen" />
 */
class Gallery extends Component {
    render() {
        return (
            <RSSPage className="gallery">
                <Banner 
                    text="gallery" 
                    bgr="/images/banners/2020_broomball_banner.JPG"
                    darkness="0.1"
                    valign="65%"
                />
                <div className="gallery-content">
                    <GalleryRow>
                        <GalleryCol flex="1.18">
                            <GalleryEntry
                                src="2020_retreat_bridge.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                pb="2.63vw"
                                src="2019_game_night.JPG"
                                alt="photo"
                            />
                            <GalleryEntry
                                src="2020_retreat_kitchen.JPG" 
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>

                    <GalleryRow>
                        <GalleryCol flex="1.83">
                            <GalleryEntry
                                src="zack1.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                src="rishi_angela_david.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>

                    <GalleryRow>
                        <GalleryCol flex="1">
                            <GalleryEntry
                                src="donya1.JPG"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                src="2020_retreat_group.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                src="2019_fire_bonfire.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>

                    <GalleryRow>
                        <GalleryCol flex="1">
                            <GalleryEntry 
                                src="panel.JPG"
                                pb="2.63vw"
                                alt="photo"
                            />
                            <GalleryEntry
                                src="ray_david_justin.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1.29">
                            <GalleryEntry 
                                src="donya2.JPG"
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>

                    <GalleryRow>
                        <GalleryCol flex="1">
                            <GalleryEntry
                                src="zack2.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="0.98">
                            <GalleryEntry 
                                src="angela1.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                src="zack3.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>

                    <GalleryRow>
                        <GalleryCol flex="2.14">
                            <GalleryEntry
                                src="2019_bonfire.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                        <GalleryCol pl="3vw" flex="1">
                            <GalleryEntry 
                                src="donya3.JPG"
                                alt="photo"
                                pb="2.63vw"
                            />
                            <GalleryEntry 
                                src="2020_retreat_group_2.jpg"
                                alt="photo"
                            />
                        </GalleryCol>
                    </GalleryRow>
                </div>

            </RSSPage>
        )
    }
}

function GalleryRow(props) {
    const style = props.height ==  null ? {display: "flex"} : {
        height: props.height,
        display: "flex"
    }
    return (
        <div className="gallery-row" style={style}>
            {props.children}
        </div>
    );
}

function GalleryCol(props) {
    const style = {
        display: "inline-block",
        paddingLeft: props.pl == null ? "0" : props.pl,
        verticalAlign: "top",
        flex: props.flex,
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

function GalleryEntry(props) {
    const style = {
        width: "100%",
        paddingBottom: props.pb == null ? "0" : props.pb
    }
    return (
        <div style={style}>
            <img src={"/images/gallery/" + props.src} alt={props.alt} style={{width: "100%"}}/>
        </div>
    )
}

export default Gallery;