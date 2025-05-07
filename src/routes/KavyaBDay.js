import React from 'react';
import './KavyaBDay.css';

function KavyaBDay() {
    return (
        <div className="kavya-bday">
            <div className="bday-header">
                <h1>Happy Birthday Kavya!</h1>
            </div>
            <div className="bday-content">
                <div className="bday-card">
                    <img 
                        src="/images/board24-25/kavya.png" 
                        alt="Kavya"
                        className="bday-image"
                    />
                    <div className="bday-message">
                        <h2>Wishing you a wonderful day!</h2>
                        <p>May your birthday be filled with joy, laughter, and wonderful memories!</p>
                    </div>
                </div>
                
                {/* Adrian's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/hike.jpeg"
                        alt="Kavya hiking"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Happy Birthday Kavya!</h2>
                        <p>Thank you to our favorite Mistress of Money, making sure our events are able to be put on! 
                        mistress of money is a joke we made so idk if u actually wanna put that on webiste or not 😭</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Adrian</p>
                    </div>
                </div>

                {/* Katie's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/Roof.jpg"
                        alt="Kavya on the roof"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Dear Kavya,</h2>
                        <p>I hope you have a wonderful birthday! Your energy is always so contagious and it’s so fun to be around you. We love you so much!! 💗</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- Katie</p>
                    </div>
                </div>

                {/* Huntington's card */}
                <div className="bday-card" style={{marginTop: '20px'}}>
                    <img 
                        src="/images/Kavya/room.jpeg"
                        alt="Kavya's room"
                        className="bday-image2"
                    />
                    <div className="bday-message">
                        <h2>Happy Birthday Kavya!</h2>
                        <p>Poopie!</p>
                        <p style={{fontSize: '0.9em', fontStyle: 'italic'}}>- [TEMP]</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default KavyaBDay;
