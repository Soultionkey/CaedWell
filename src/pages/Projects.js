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
                            In 2017 and 2018  Palstart implemented the  Introduction to Programming for ages 8-12 using the <a href="https://code.org/" target="_blanck">Code.org</a> curriculum. This project was carried out in the West Bank village of Silwad. From these courses we found that the children in Palestine have a natural curiosity to learn more about computer science.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Hour Of Code Nablus</h2>
                            In 2017 Palstart held a week long Hour of Code event in which we taught 300 high school students an introduction to basic programming skills.<a href="https://hourofcode.com/ps" target="_blanck">The Hour of Code </a>is an international event organized by code.org and carried out in over 180 countries with the goal of encouraging young students to get involved with computer science.
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
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Introduction to Advanced Programing Basics in Java</h2>
                            In 2017 and 2018 Palstart carried out one of our favorite projects. The  Introduction to Advanced Programming Basics using Java course was taught to students ranging in ages from 11 to 17. This was a highly successful project in which we discovered that the local students in Silwad were capable of learning difficult and complex concepts.
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
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Introduction to Advanced Programing Basics in Java</h2>
                            In 2017 and 2018 Palstart carried out one of our favorite projects. The  Introduction to Advanced Programming Basics using Java course was taught to students ranging in ages from 11 to 17. This was a highly successful project in which we discovered that the local students in Silwad were capable of learning difficult and complex concepts.
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
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Introduction to Advanced Programing Basics in Java</h2>
                            In 2017 and 2018 Palstart carried out one of our favorite projects. The  Introduction to Advanced Programming Basics using Java course was taught to students ranging in ages from 11 to 17. This was a highly successful project in which we discovered that the local students in Silwad were capable of learning difficult and complex concepts.
                    </div>
                </div>
                {/* <div >
                    <footer className="footer">
                        Palstart ©2017
                    </footer>
                </div> */}
            </div>
            
        );
    }
}

export default Projects;
