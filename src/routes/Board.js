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
        const contents = (
            <>
                <BoardProfile width={this.state.width}
                    title="President"
                    name="Donya Mazdeyasnan"
                    major="Psychobiology, 2022"
                    img="donya.jpg"
                    size="130% auto"
                    halign="55%"
                />
                <BoardProfile width={this.state.width}
                    title="External Vice President"
                    name="Anusha Fatehpuria"
                    major="Human Biology and Society, 2023"
                    img="anusha.jpg"
                    size="130% auto"
                    halign="30%"
                    valign="40%"
                />
                <BoardProfile width={this.state.width}
                    title="Internal Vice President"
                    name="Chelsey Wang"
                    major="Computer Science, 2022"
                    img="chelsey.jpg"
                    valign="50%"
                    halign="30%"
                    size="120% auto"
                />
                <BoardProfile width={this.state.width}
                    title="Secretary"
                    name="James Yoon"
                    major="Chemistry, 2022"
                    img="james.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Zack Pakin"
                    major="Computer Science, 2023"
                    img="zack.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Daniel Kao"
                    major="Linguistics and Computer Science, 2024"
                    img="daniel.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Community Service Director"
                    name="Andrew Kang"
                    major="Biochemistry, 2022"
                    img="andrew.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Educational Programs Director"
                    name="Karine Kim"
                    major="Physiological Science/Anthropology, 2023"
                    img="karine.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Funding Director"
                    name="Aditya Guru"
                    major="Physiological Science, 2022"
                    img="aditya.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="LAMP Director"
                    name="Cindy Berganza"
                    major="Psychology/Political Science, 2022"
                    img="cindy.jpg"
                    size="140% auto"
                    halign="50%"
                    valign="50%"
                />
                <BoardProfile width={this.state.width}
                    title="LAMP Director"
                    name="Ryan Vuong"
                    major="Computer Science, 2023"
                    img="ryan.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Publicity Director"
                    name="Joy Lee"
                    major="Psychobiology, 2023"
                    img="joy.png"
                    halign="50%"
                    valign="2%"
                />
                <BoardProfile width={this.state.width}
                    title="Transfer Affairs Director"
                    name="Marilyn Martinez"
                    major="Sociology, 2022"
                    img="marilyn.jpg"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="Treasurer"
                    name="Bilal Hamid"
                    major="Microbiology, Immunology, and Molecular Genetics, 2023"
                    img="bilal.jpg"
                    size="120% auto"
                    valign="20%"
                    halign="50%"
                />
                <BoardProfile width={this.state.width}
                    title="Webmaster"
                    name="David Deng"
                    major="Computer Science, 2023"
                    img="david.jpg"
                />
            </>
        )
        return (
            <RSSPage className="board">
                <Banner 
                    text="executive board"
                    bgr="/images/banners/royce.jpg"
                    darkness="0"
                    valign="55%"
                />
                <div className="board-wrapper">
                    {this.state.width > 840 ? contents :
                        <div className="board-flex-wrapper">
                            {contents}
                        </div>
                    }
                </div>
            </RSSPage>
        )
    }
}

class BoardProfile extends Component {
    render() {
        const halign = this.props.halign == null ? "0%" : this.props.halign; //picture movement laterally
        const valign = this.props.valign == null ? "0%" : this.props.valign; //picture movement vertically
        const size = this.props.size == null ? "cover" : this.props.size; //zoom
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