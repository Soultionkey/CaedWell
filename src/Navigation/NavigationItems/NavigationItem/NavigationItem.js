import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';
import { HashLink as Link } from 'react-router-hash-link';
class navigationItem extends React.Component {
    state = {
        color:'white'
    }
    listenScrollEvent = e => {
        if (window.scrollY > 200) {
            this.setState({color: 'white'})
        } else {

          this.setState({color: 'black'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
         const bgColor = this.state.color;
         var newColor = 'red';
        return (
           <div>
             <style>{"\
                .NavigationItem a{\
                  `color: ${newColor} `;\
                }\
              "}</style>
            <li className="NavigationItem" style={{color:{bgColor}}}>
                <NavLink
                    
                    style={{ textDecoration: 'none'}}
                    to={this.props.link}
                    exact={this.props.exact}
                    onFocus={this.props.click}
                    activeClassName="active">{this.props.children}</NavLink>
            </li>
            </div>
        );
    }
}

export default navigationItem;