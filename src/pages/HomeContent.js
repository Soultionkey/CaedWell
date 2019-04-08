import React, { Component } from 'react';
import './HomeContent.css';
import videoSrc from '../../src/video/Cardw-test.mp4';
import { Button } from 'reactstrap';

class HomeContent extends Component {
    constructor(props) {

        super(props);
        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=IsupcATMLr0&list=RDIsupcATMLr0&start_radio=1'
        }
    }

    render() {
        return (
            <div >
             {/* <div className="sperater-line"></div> */}
                <video autoPlay loop
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '600px',
                  }} 
                  src={videoSrc}
                />
                <p className="body-text">Find Relief Now</p>
                <p className="paraghraph-2">with our fantastic team</p>
                <Button style={{ border: '2px solid #fff' }} className="bg-button" onClick={this.toggle}><span className="bg-button-text ">Schedule Now</span></Button>

              </div>
        );
    }
}
export default HomeContent;