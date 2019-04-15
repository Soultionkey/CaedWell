import React, { Component } from 'react';
import './Projects.css';
import sectionOnePhoto from '../img/coding1.jpg'
class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="bg-page">
               <div className="section"></div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Introduction to Programming Basics</h2>
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the Code.org curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Introduction to Programming Basics</h2>
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the Code.org curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Introduction to Programming Basics</h2>
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the Code.org curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Introduction to Programming Basics</h2>
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the Code.org curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Introduction to Programming Basics</h2>
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the Code.org curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
