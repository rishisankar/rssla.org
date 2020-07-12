import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './board.css';

class Board extends Component {
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
        return (
            <RSSPage className="board">
                <Banner 
                    text="executive board"
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />
                <div className="board-wrapper">
                    <BoardProfile width={this.state.width}
                        title="President"
                        name="Donya Mazdeyasnan"
                        major="Psychobiology, 2022"
                        img="donya.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="External Vice President"
                        name="Rebecca Zhu"
                        major="Business Economics and Linguistics/Computer Science, 2022"
                        img="rebecca.png"
                    />
                    <BoardProfile width={this.state.width}
                        title="Internal Vice President"
                        name="Carolyn Hu"
                        major="Chemistry, 2021"
                        img="carolyn.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Secretary"
                        name="James Yoon"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Activities Director"
                        name="Zack Pakin"
                        major="Computer Science, 2023"
                        img="zack.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Activities Director"
                        name="Tina Huang"
                        major="Computer Science and Engineering, 2023"
                        img="tina.jpg"
                        halign="45%"
                    />
                    <BoardProfile width={this.state.width}
                        title="Community Service Director"
                        name="Andrew Kang"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Educational Programs Director"
                        name="Anusha Fatehpuria"
                        major="Human Biology and Society, 2023"
                        img="anusha.jpg"
                        size="130% auto"
                        halign="30%"
                        valign="40%"
                    />
                    <BoardProfile width={this.state.width}
                        title="Funding Director"
                        name="Aditya Guru"
                        major="Physiological Sciences, 2022"
                        img="aditya.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="LAMP Director"
                        name="Mizna Akbar"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="LAMP Director"
                        name="Sandhya Rajkumar"
                        major="???"
                        img="idk.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Publicity Director"
                        name="Jenny Chung"
                        major="Mathematics for Teaching, 2022"
                        img="jenny.jpg"
                    />
                    <BoardProfile width={this.state.width}
                        title="Transfer Affairs Director"
                        name="Michelle Garabetian"
                        major="Political Science, 2021"
                        img="michelle.jpg"
                        halign="50%"
                    />
                    <BoardProfile width={this.state.width}
                        title="Treasurer"
                        name="Jason Liu"
                        major="Neuroscience, 2021"
                        img="jason.jpg"
                    />
                    <BoardProfile width={this.state.width}
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
        if (this.props.width > 840) {
            return (
                <div className="board-profile-wrapper">
                    <div className="board-profile-img" style={imgStyle} />
                    <div className="board-profile-title">{this.props.title}</div>
                    <div className="board-profile-name">{this.props.name}</div>
                    <div className="board-profile-major">{this.props.major}</div>
                </div>
            )
        } else {
            return (
                <div className="board-profile-wrapper">
                    <div className="board-profile-img" style={imgStyle} />
                    <div className="board-profile-text-wrapper">
                        <div className="board-profile-name">{this.props.name}</div>
                        <div className="board-profile-title">{this.props.title}</div>
                        <div className="board-profile-major">{this.props.major}</div>
                    </div>
                </div>
            )
        }
    }
}

export default Board;