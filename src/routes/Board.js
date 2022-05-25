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
                    name="Anusha Fatehpuria"
                    major="Human Biology and Society, 2023"
                    img="anusha.jpg"
                    size="150% auto"
                    halign="48%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="External Vice President"
                    name="Joy Lee"
                    major="Psychobiology, 2023"
                    img="joy.png"
                    size="200% auto"
                    halign="50%"
                    valign="2%"
                />
                <BoardProfile width={this.state.width}
                    title="Internal Vice President"
                    name="Daniel Kao"
                    major="Computer Science, 2024"
                    img="daniel.jpeg"
                    size="140% auto"
                    halign="40%"
                    valign="37%"
                />
                <BoardProfile width={this.state.width}
                    title="Secretary"
                    name="Karine Kim"
                    major="Physiological Science/Anthropology, 2023"
                    img="karine.jpg"
                    size="115% auto"
                    halign="40%"
                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Cadence Chang"
                    major="Computational & Systems Biology, 2025"
                    img="cadence.jpg"
                    size="120% auto"
                    halign="52%"
                    valign="20%"

                />
                <BoardProfile width={this.state.width}
                    title="Activities Director"
                    name="Tiffany Mok"
                    major="Business Economics, 2025"
                    img="tiffany.jpg"
                    size="180% auto"
                    halign="55%"
                    valign="30%"

                />
                <BoardProfile width={this.state.width}
                    title="Community Service Director"
                    name="Juan Vergara"
                    major="Biochemistry, 2025"
                    img="juan.jpg"
                />
                <BoardProfile width={this.state.width}
                    title="Educational Programs Director"
                    name="Alvin Liu"
                    major="Mathematics, 2024"
                    img="alvin.jpg"
                    size="180% auto"
                    halign="38%"
                    valign="30%"
                />
                <BoardProfile width={this.state.width}
                    title="Funding Director"
                    name="America Barrera"
                    major="Data Theory, 2025"
                    img="america.jpg"
                    size="190% auto"
                    halign="48%"
                    valign="42%"
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
                    name="Daisy Perez"
                    major="Business Economics, 2025"
                    img="daisy.jpeg"
                    size="135% auto"
                    halign="50%"
                    valign="2%"
                />
                <BoardProfile width={this.state.width}
                    title="Transfer Affairs Director"
                    name="Cody England"
                    major="Chemical Engineering, 2024"
                    img="cody.jpg"
                    size="160% auto"
                    halign="46%"
                    valign="27%"
                />
                <BoardProfile width={this.state.width}
                    title="Treasurer"
                    name="Bilal Hamid"
                    major="Microbiology, Immunology, and Molecular Genetics, 2023"
                    img="bilal.jpg"
                    size="180% auto"
                    valign="30%"
                    halign="50%"
                />
                {/* <BoardProfile width={this.state.width}
                    title="Webmaster"
                    name="David Deng"
                    major="Computer Science, 2023"
                    img="david.jpg"
                /> */}
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
            backgroundImage: `url(/images/board22-23/${this.props.img})`,
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