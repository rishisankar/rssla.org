import React, { Component } from 'react';

import content from './Content'
import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import OSP from '../util/OSP';
import TWR from '../util/TWR';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './shop.css'
import Papa from 'papaparse'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            data: [],
            loading: false,
            error: null
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }



    async componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        try {
            this.setState({loading: true});
            const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQwFwCJ2ais5-EPo1lZHPhsbOWP0PeWklQ1aQj3b6iqLuIn8_8-r3MikvRhMOXnDPZJsEWqivO9OMOo/pub?output=csv');
            const csv = await response.text();
            Papa.parse(
                csv, {
                header: true,
                complete: (results) => {
                    this.setState({data: results.data, loading: false})
                }
            });
        } catch (error) {
            this.setState({error, loading:false});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const {data, loading, error} = this.state;
        if (loading) {
            return <div>loading...</div>
        }

        if (error) {
            return <div>Error: {error.message}</div>
        }
        console.log(data)

        return (
            <RSSPage className="shop">
                <Banner
                    text="Shop"
                    bgr="/images/prospectives/banner.png"
                    darkness="0.2"
                    valign="65%"
                />
                <div className='item-card-container'>
                    {this.state.data && this.state.data.map((arr) => (
                            <div className='item-card'>
                                <ItemCard
                                    itemName={arr.Item}
                                    price={arr.Price}
                                    avail={{XS:arr.XS, S:arr.S, M:arr.M, L:arr.L, XL: arr.XL}}
                                />
                            </div>
                        )
                    )}
                </div>
            </RSSPage>
        )
    }
}

var ItemCard = props => {
    // const imgStyle = {
    //     backgroundImage: `url(/images/shop/${props.img}.jpg)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "50% 60%"
    // }
    console.log(props)
    if (props.avail.XL != '') {
        let front = '/images/shop/${props.img} Front.jpg'
        return(
            <div>
                <div className='item-name'>
                    {props.itemName}
                    <div className='price'>${props.price}</div>
                </div>
                <div>
                    <img className='item-img' src={`/images/shop/${props.itemName} Front.jpg`} alt='item_img' />
                    <img className='item-img' src={`/images/shop/${props.itemName} Back.jpg`} alt='item_img' />
                </div>
                <div className='size-circles'>
                    {Object.keys(props.avail).map((key) => {
                        return <SizeCircles size={key} num={props.avail.key}/>
                    })}
                </div>
            </div>
        )
    }
    else {
        return(
            <div>
                <div className='item-name'>
                    {props.itemName}
                    <div className='price'>${props.price}</div>
                </div>
                <img className='item-img' src={`/images/shop/${props.itemName}.jpg`} alt='item_img' />
                <div className='num-avail'>{props.avail.XS} left!</div>
            </div>
        )
    }
}

var SizeCircles = props => {
    return(
        <div className='size-circle'>
            <p className='size-text'>{props.size}</p>
        </div>
    )
}

export default Shop;