import React, { Component } from 'react';
import './HomeContent.css';
import ved from '../video/palstartHeader.mp4';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    }
    componentDidUpdate() {
        let hash = this.props.location.hash.replace('#', '');
        if (hash) {
            let node = ReactDOM.findDOMNode(this.refs[hash])
            if (node) {
                node.scrollIntoView();
            }
        }
    }
     
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        const style = {
            width: '80%',
            height: '400px',
            marginLeft:'25px'
        }
        return (
            <div className="body" >
                <div className="bg-body" >
=                    <div>
                        <pre className="bg-text" >{`
                      Computer Science Education 
                                       Palestine
                     `}</pre>
                    </div>
                    
                </div>
                
                <div className="home-serperator">
                    <div id="#about_section" ref='about_section'></div>
                    <div className="about-section">
                        <div className="rowHome">
                            <div className="home-column">
                                <h1 className="column-text"> About Us<br /><br /></h1>
                                <p className="about-text" >
                                    Palstart is a Palestinian nonprofit organization with the aim of providing high quality computer science education at no cost for qualified students.
                                  The mission of Palstart is to connect young Palestinians with the modern job market and we believe that computer science  education is the most valuable component in achieving our goal.<br /><br /></p>
                                <p className="hrSeperator"></p>
                                <video loop autoplay id="video-background" muted plays-inline>
                                    <source src={ved} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div id="#contact_section" ref='contact_section'></div>

                    </div>
                    <div className="contactUs-section ">
                        <div className="rowHome">
                           <div className="home-column">
                                <h1 className="column-text"> Contact Us<br /><br /></h1>
                                <p className="contact-info">
                                    Rafidya Building <br />
                                    Rafidya Street.<br />
                                    Nablus, Palestine<br />
                                    Email: info@palstart.net <br /><br /><br />
                                </p>
                                <p className="hrSeperator"></p>
                                
                                 
                                     <Map
                                        google={this.props.google}
                                        style={style}
                                        initialCenter={{
                                            lat: 32.221613,
                                            lng: 35.239127
                                        }}
                                        zoom={14}>

                                        <Marker onClick={this.onMarkerClick}
                                            name={'Palstart'} />

                                        <InfoWindow onClose={this.onInfoWindowClose}
                                            marker={this.state.activeMarker}
                                            visible={this.state.showingInfoWindow}>
                                            <div>
                                                <h1>{this.state.selectedPlace.name}</h1>
                                            </div>
                                        </InfoWindow>
                                    </Map>
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

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDm41cZKiz5gJpgL90amLfCVvvUS5DWgFI")
})(HomeContent)