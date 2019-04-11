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
                <NavigationItem link="/projects" exact click={this.hideMenu} >Projects</NavigationItem>
                <NavigationItem link="/about" click={this.hideMenu} >About</NavigationItem>
                <NavigationItem link="/prices" click={this.hideMenu} >Blog</NavigationItem>
            </ul>
        );
    }
}

export default navigationItems;
