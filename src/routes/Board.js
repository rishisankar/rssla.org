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
                    name="Cody England"
                    major="Chemical Engineering and Applied Mathematics, 2024"
                    img="Cody.JPG"
                    size="150% auto"
                    halign="48%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="External Vice President"
                    name="Alvin Liu"
                    major="Mathematics, 2024"
                    img="Alvin.JPG"
                    size="180% auto"
                    halign="41%"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="Internal Vice President"
                    name="Cadence Chang"
                    major="Computational & Systems Biology, 2025"
                    img="Cadence.jpg"
                    size="115% auto"
                    halign="45%"
                    valign="35%"
                />
                <BoardProfile width={this.state.width}
                    title="Secretary"
                    name="Joshua Hockman"
                    major="Biochemistry, 2026"
                    img="Joshua.png"
                    size="232% auto"
                    halign="47%"
                    valign = "58%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Brianna Bayliss"
                    major="Mechanical Engineering, 2026"
                    img="Brianna.jpeg"
                    size="105% auto"
                    halign="70%"
                    valign="25%"

                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Rebecca Lee"
                    major="Biochemistry, 2026"
                    img="Rebecca.jpg"
                    size="180% auto"
                    halign="50%"
                    valign="20%"

                />
                <BoardProfile width={this.state.width}
                    title="Community Service Director"
                    name="Juan Vergara"
                    major="Computational & Systems Biology, 2025"
                    img="Juan.jpg"
                    size="110% auto"
                    halign = "50%"
                    valign="65%"
                />
                <BoardProfile width={this.state.width}
                    title="Educational Programs Director"
                    name="Shannon Shams"
                    major="Physiological Science, 2026"
                    img="Shannon.jpg"
                    size="110% auto"
                    halign="50%"
                    valign="60%"
                />
                <BoardProfile width={this.state.width}
                    title="Finance Director"
                    name="Cheryl Wu"
                    major="Computer Science and Economics, 2026"
                    img="Cheryl.JPG"
                    size="130% auto"
                    halign="50%"
                    valign="30%"
                />
                {/* <BoardProfile width={this.state.width}
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
                /> */}
                <BoardProfile width={this.state.width}
                    title="Publicity Director"
                    name="Tiffany Mok"
                    major="Economics and Psychology, 2025"
                    img="Tiffany.JPG"
                    size="170% auto"
                    halign="55%"
                    valign="38%"
                />
                <BoardProfile width={this.state.width}
                    title="Publicity Director"
                    name="Daisy Perez"
                    major="Economics, 2025"
                    img="Daisy.jpg"
                    size="120% auto"
                    halign="50%"
                    valign="67%"
                />
                <BoardProfile width={this.state.width}
                    title="Transfer Affairs Director"
                    name="Kenneth Nguyen"
                    major="Civil Engineering, 2024"
                    img="Kenneth.jpg"
                    size="100% auto"
                    halign="50%"
                    valign="27%"
                />
                {/* <BoardProfile width={this.state.width}
                    title="Treasurer"
                    name="Bilal Hamid"
                    major="Microbiology, Immunology, and Molecular Genetics, 2023"
                    img="Bilal.jpg"
                    size="180% auto"
                    valign="30%"
                    halign="50%"
                /> */}
                <BoardProfile width={this.state.width}
                    title="Webmaster"
                    name="America Barrera"
                    major="Statistics & Data Science, 2025"
                    img="America.JPG"
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
            backgroundImage: `url(/images/board23-24/${this.props.img})`,
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