import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './board.css';

class Board extends Component {
    render() {
        return (
            <RSSPage className="board">
                <Banner 
                    text="executive board"
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />
                <div className="board-wrapper">
                    <BoardProfile
                        title="President"
                        name="Donya Mazdeyasnan"
                        major="Psychobiology, 2022"
                        img="donya.jpg"
                    />
                    <BoardProfile
                        title="External Vice President"
                        name="Rebecca Zhu"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile
                        title="Internal Vice President"
                        name="Carolyn Hu"
                        major="Chemistry, 2021"
                        img="carolyn.jpg"
                    />
                    <BoardProfile
                        title="Secretary"
                        name="James Yoon"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile
                        title="Activities Director"
                        name="Zack Pakin"
                        major="Computer Science, 2023"
                        img="zack.jpg"
                    />
                    <BoardProfile
                        title="Activities Director"
                        name="Tina Huang"
                        major="Computer Science and Engineering, 2023"
                        img="tina.jpg"
                        halign="45%"
                    />
                    <BoardProfile
                        title="Community Service Director"
                        name="Andrew Kang"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile
                        title="Educational Programs Director"
                        name="Anusha Fatehpuria"
                        major="Human Biology and Society, 2023"
                        img="anusha.jpg"
                        size="130% auto"
                        halign="30%"
                        valign="40%"
                    />
                    <BoardProfile
                        title="Funding Director"
                        name="Aditya Guru"
                        major="Physiological Sciences, 2022"
                        img="aditya.jpg"
                    />
                    <BoardProfile
                        title="LAMP Director"
                        name="Mizna Akbar"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile
                        title="LAMP Director"
                        name="Sandhya Rajkumar"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile
                        title="Publicity Director"
                        name="Jenny Chung"
                        major="Mathematics for Teaching, 2022"
                        img="jenny.jpg"
                    />
                    <BoardProfile
                        title="Transfer Affairs Director"
                        name="Michelle Garabetian"
                        major="Political Science, 2020"
                        img="michelle.jpg"
                        halign="50%"
                    />
                    <BoardProfile
                        title="Treasurer"
                        name="Jason Liu"
                        major="???"
                        img="jason.jpg"
                    />
                    <BoardProfile
                        title="Webmaster"
                        name="Rishi Sankar"
                        major="Computer Science and Mathematics, 2023"
                        img="rishi.jpg"
                        halign="50%"
                    />
                </div>
            </RSSPage>
        )
    }
}

class BoardProfile extends Component {
    render() {
        const halign = this.props.halign == null ? "0%" : this.props.halign;
        const valign = this.props.valign == null ? "0%" : this.props.valign;
        const size = this.props.size == null ? "cover" : this.props.size;
        const imgStyle = {
            backgroundImage: `url(/images/board/${this.props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${halign} ${valign}`,
            backgroundSize: size
        }

        return (
            <div className="board-profile-wrapper">
                <div className="board-profile-img" style={imgStyle} />
                <div className="board-profile-title">{this.props.title}</div>
                <div className="board-profile-name">{this.props.name}</div>
                <div className="board-profile-major">{this.props.major}</div>
            </div>
        )
    }
}

export default Board;