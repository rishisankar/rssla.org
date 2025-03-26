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
                    name="Cadence Chang"
                    major="Computational & Systems Biology, 2025"
                    img="cadence.jpg"
                    size="115% auto"
                    halign="45%"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="External Vice President"
                    name="Rebecca Lee"
                    major="Biochemistry, 2026"
                    img="rebecca.jpg"
                    size="180% auto"
                    halign="50%"
                    valign="20%"
                />
                <BoardProfile width={this.state.width}
                    title="Internal Vice President"
                    name="Luke Jones"
                    major="Mathematics, 2027"
                    img="luke.png"
                    size="115% auto"
                    halign="45%"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="Secretary"
                    name="Joshua Hockman"
                    major="Biochemistry, 2026"
                    img="joshua.JPG"
                    size="232% auto"
                    halign="47%"
                    valign = "58%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Clarissa Zuo"
                    major="Physics, 2027"
                    img="clarissa.jpg"
                    size="105% auto"
                    halign="70%"
                    valign="25%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Judy Lee"
                    major="Psychobiology, 2027"
                    img="judy.jpg"
                    size="105% auto"
                    halign="70%"
                    valign="20%"
                />
                <BoardProfile width={this.state.width}
                    title="Community Service Director"
                    name="Jake Maricich"
                    major="Neuroscience, 2027"
                    img="jake.png"
                    size="110% auto"
                    halign = "50%"
                    valign="65%"
                />
                <BoardProfile width={this.state.width}
                    title="Educational Programs Director"
                    name="Shannon Shams"
                    major="Physiological Science, 2026"
                    img="shannon.jpg"
                    size="110% auto"
                    halign="50%"
                    valign="60%"
                />
                <BoardProfile width={this.state.width}
                    title="Funding Director"
                    name="Chan Park"
                    major="Mathematics/Economics, 2027"
                    img="chan.JPG"
                    size="130% auto"
                    halign="50%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="Treasurer"
                    name="Kavya Kumar"
                    major="Economics and Psychology, 2025"
                    img="kavya.png"
                    size="130% auto"
                    halign="50%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="Publicity Director"
                    name="Katie Fang"
                    major="World Arts and Cultures, 2026"
                    img="katie.jpg"
                    size="170% auto"
                    halign="55%"
                    valign="38%"
                />
                <BoardProfile width={this.state.width}
                    title="Transfer Affairs Director"
                    name="Evette Palacios"
                    major="Political Science and Education, 2025"
                    img="evette.jpg"
                    size="100% auto"
                    halign="50%"
                    valign="20%"
                />
                <BoardProfile width={this.state.width}
                    title="Webmaster"
                    name="Nyla Zia"
                    major="Computer Science, 2026"
                    img="nyla.jpg"
                    size="100% auto"
                    halign="55%"
                    valign="58%"
                />
            </>
        )
        return (
            <RSSPage className="board">
                <Banner 
                    text="executive board"
                    bgr="/images/banners/royce-hall-pixabay.jpg"
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
            backgroundImage: `url(/images/board24-25/${this.props.img})`,
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