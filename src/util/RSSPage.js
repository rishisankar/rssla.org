import React, { Component } from 'react';

import Header from './Header';
import './global.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                Footer
            </div>
        )
    }
}

/**
 * Wrapper component for each page to include the header, footer, and properly format content within page.
 * Wrap <RSSPage> component around each page's content. 
 */
const RSSPage = (props) => (
    <React.Fragment>
        <Header />
            <div id="content-wrapper" className={props.className}>
                {props.children}
            </div>
        <Footer />
    </React.Fragment>
  );

export default RSSPage;