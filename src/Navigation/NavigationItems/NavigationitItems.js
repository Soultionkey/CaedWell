import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { HashRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
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
    goToAbout = (event) => {
        event.preventDefault();
        window.scrollTo(0, this.scroll);
    };
    render() {
        const { open } = this.state;

        return (
            <ul className="NavigationItems" >
                <NavigationItem link="/projects" exact>Projects</NavigationItem>
                <NavigationItem link="/#about_section" onClick={this.goToAbout}>About</NavigationItem>
                <NavigationItem link="/blog" >Blog</NavigationItem>
                <NavigationItem link="/#contact_section" >Contact</NavigationItem>

            </ul>
        );
    }
}

export default navigationItems;
