import React, { Component } from 'react';
import './HomeContent.css';
import ModalVideo from 'react-modal-video';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { Link } from "react-router-dom";
import axios from 'axios';
import ved from '../video/palstartHeader.mp4';
import te from '../img/coding1.jpg'
import Map from '../pages/Map';
class HomeContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            modal: false,
            startDate: new Date(),
            name: '',
            time: '',
            phone: '',
            email: '',
            message: 'Your consultation has been received , we will contact you soon ! '
        }
        this.openModal = this.openModal.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    openModal() {
        this.setState({ isOpen: true })
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        // if(dataState){
        // this.handleSubmit()
        // }
        this.handleSubmit()
    }
    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }
    handelChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    }
    async handleSubmit(e) {

        await axios.all([this.messagToTheOWner(), this.messagToTheCustomer()])
            .then(axios.spread(function (acct, perms) {
                // Both requests are now complete
            }));
    }
    messagToTheOWner() {
        const { name, email, time, phone, startDate, message } = this.state;
        return axios.post('/api/callForm', {
            name,
            email,
            time,
            phone,
            startDate,
            message
        }
        )
    }

    messagToTheCustomer() {
        const { name, email, message } = this.state;
        return axios.post('/api/callReplay', {
            name,
            email,
            message
        }
        )
    }


    render() {
        return (
            <div >
            
                <div id="container">
                    <video loop autoplay='' muted plays-inline>
                        <source src={ved} type="video/mp4" />
                    </video>
                    <pre className="bg-text" >{`
                      Computer Science Education 
                                        Palestine
                     `}</pre>
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
                    <div className="home-section">
                        <div className="rowHome">
                            <div className="home-column">
                                <p className="about-text "><img src={te} alt="Pineapple" className="img1" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>

                            </div>

                            <div className="home-column">
                                <p ><img src={te} alt="Pineapple" className="img2" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>

                            </div>

                            <div className="home-column">
                                <p ><img src={te} alt="Pineapple" className="img1" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>

                            </div>
                        </div>
                    </div>
                    <div className="home-section"></div>
                    <Map />
                </div>
            </div>
        );
    }
}

export default HomeContent;
