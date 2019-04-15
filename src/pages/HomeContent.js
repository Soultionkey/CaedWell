import React, { Component } from 'react';
import './HomeContent.css';
import ved from '../video/palstartHeader.mp4';
import ReactDOM from 'react-dom';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidUpdate() {
        let hash = this.props.location.hash.replace('#', '');
        if (hash) {
            let node = ReactDOM.findDOMNode(this.refs[hash]);
            if (node) {
                node.scrollIntoView();
            }
        }
    }
    render() {
        return (
            <div >
                <div id="bg-body" >
                    <div>
                        <pre className="bg-text" >{`
                      Computer Science Education 
                                        Palestine
                     `}</pre>
                    </div>
                </div>
                {/* <div id="bg-body">
                    <video loop autoplay=''id="video-background" muted  plays-inline>
                        <source src={ved} type="video/mp4" />
                        
                    </video>
                    <pre className="bg-text" >{`
                      Computer Science Education 
                                  In Palestine
                     `}</pre>
                </div> */}
                <div className="home-serperator">
                <div id="#about_section" ref='about_section'></div>
                    <div className="home-section">
                        <div className="rowHome">
                            <div className="home-column">
                                <h1 className="main-about-text "> About Us<br /><br /></h1>
                                <p className="about-text" >
                                    Palstart is a Palestinian nonprofit organization with the aim of providing high quality computer science education at no cost for qualified students.
                                  The mission of Palstart is to connect young Palestinians with the modern job market and we believe that computer science  education is the most valuable component in achieving our goal.<br /><br /></p>
                                <p className="hrSeperator"></p>
                            </div>
                            <div className="home-column" >
                                <video loop autoplay='' id="video-background" muted plays-inline>
                                    <source src={ved} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <footer className="footer">
                        Palstart ©2017
                    </footer>
                </div>
            </div>
        );
    }
}

export default HomeContent;
