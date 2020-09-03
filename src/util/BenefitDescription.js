import React, { Component } from 'react';

import './benefit_description.css';

class BenefitDescription extends Component {
    render() {
        const imgHeight = {
            height: this.props.scale == null ? "100%" : this.props.scale
        }
        return (
            <div className="scholarship-benefit">
                <div className="benefit-banner">
                    <img src={`/images/bg_icons/${this.props.bgr}`} alt={this.props.subheading} className="benefit-banner-img" style={imgHeight} />
                    <div className="benefit-banner-text">
                        {this.props.smallheading == null ?
                            <React.Fragment>
                                <div className="benefit-banner-text-heading">{this.props.heading}</div>
                                <div className="benefit-banner-text-subheading">{this.props.subheading}</div>
                            </React.Fragment>
                        :
                            <div className="benefit-banner-text-smallheading">{this.props.smallheading}</div>
                        }
                    </div>
                </div>
                <div className="benefit-banner-desc">{this.props.desc}</div>
            </div>
        )
    }
}

function BenefitWrapper(props) {
    return (
        <div className="scholarship-benefits-wrapper">
            {props.children}
        </div>
    )
}

export {BenefitDescription, BenefitWrapper}