import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';

import './EventPage.css';

class EventPage extends Component {
    render() {
        return (
            <RSSPage className="eventpage">
                <Banner 
                    text="events" 
                    bgr="/images/banners/royce-hall-pixabay.jpg"
                    darkness="0.2"
                    valign="50%"
                />
                <TextPanel heading="upcoming events">
                    {/* Add your events content here */}
                    
                    <div className="Kavya-birthday">
                        <h1>Kavya's Birthday</h1>
                        
                        <div className="birthday-content">
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#c2c2c2',
                                padding: '20px',
                                borderRadius: '8px',
                                margin: '20px 0'
                            }}>
                                <img 
                                    src="/images/board24-25/kavya.png" 
                                    alt="Kavya"
                                    className="birthday-image"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginRight: '20px'
                                    }}
                                />
                                <div style={{flex: 1, color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div>
                                        <h2>Happy Birthday Kavya!</h2>
                                        <p>Wishing you a wonderful day filled with joy and celebration!</p>
                                    </div>
                                    <Link to="/kavya-bday" className="heart-button">
                                        <div id="heart"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="events-content">
                        <p>Stay tuned for upcoming events!</p>
                    </div>
                </TextPanel>
            </RSSPage>
        );
    }
}

export default EventPage;
