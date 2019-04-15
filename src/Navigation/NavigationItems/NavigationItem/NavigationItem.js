import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationItem.css';
import { HashLink as Link } from 'react-router-hash-link';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <NavLink 
            style={{textDecoration:'none'}}
            to={props.link}
            exact={props.exact}
            onFocus={props.click}
            activeClassName="active">{props.children}</NavLink>
    </li>
);

export default navigationItem;