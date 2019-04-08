import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom'

class navigationItems extends React.Component {
    state = {
        open: false
    }
    handleClick = (event) => {
        event.preventDefault();
        this.setState({ open: !this.state.open });
    }
    hideMenu = (event) => {
        event.preventDefault();
        this.setState({ open: false});
    }
    render() {
        const { open } = this.state;

        return (
            <ul className="NavigationItems" >
                <NavigationItem link="/about" exact click={this.hideMenu} >About</NavigationItem>
                <NavigationItem link="/services" click={this.hideMenu} >Services</NavigationItem>
                <NavigationItem link="/prices" click={this.hideMenu} >Prices</NavigationItem>
                <NavigationItem link="/blog" click={this.hideMenu} >Blog</NavigationItem>
                <NavigationItem link="/Contact" click={this.hideMenu} >Contact</NavigationItem>
            </ul>
        );
    }
}

export default navigationItems;
