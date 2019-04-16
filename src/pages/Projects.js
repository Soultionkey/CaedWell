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
            <div>
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
                            <h2>Introduction to Advanced Programing Basics in Java</h2>
                            This course was for students ranging in ages from 11-16. This course came as a great surprise for our team. We anticipated that the students may not be excited to dive into such complex concepts at such early ages. However the  students proved us wrong and performed with enthusiasm and curiosity.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Introduction to Advanced Programing Basics with Javascript</h2>
                            This course was for students ranging in ages from 11-17. From this project we learned that the students were very receptive to web development. This course allowed for the students to code and see the results instantly. This was very rewarding for them and in turn encouraged them to spend more time learning and practicing.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>E-learning Java Course Platform in Arabic</h2>
                            In 2018 we created an online e-learning platform created to provide Arabic speakers with a way in which to learn Java basics in Arabic.While there is an abundance of resources in English, we felt that it was important to create an Arabic course that compiles all of the important basic Java concepts in once course.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Palstart Podcast</h2>
                            In 2017 we created a facebook live podcast that focused on the importance of computer science in the Arab world.We created this project in order to educate the Palestinian community, parents, and students on the possibilities that computer science education can provide.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>Educational & Motivational Videos</h2>
                            In 2018 we began creating content in Arabic to further educate and motivate the community. These videos focused on the global need for more qualified programmers. They also focused on motivating individuals to not focus on their currents situations and to focus on learning skills.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img2" />
                            <h2>Web Development using React for university students</h2>
                            In this course we taught advanced web development in  React for graduates holding a Bachelors in Computer Science. This course helped Palstart grow in many ways. We were able to interact with students that already had many skills. This allowed for the team to dive into advanced concepts in which the students could handle. This project resulted in 30% of the students being hired by local companies.
                    </div>
                </div>
                <div className="project-main-section">
                        <div className="project-text">
                            <img src={sectionOnePhoto} alt="projectPhoto" className="project-img1" />
                            <h2>English for Programers</h2>
                            One common problem that our team noticed is that while many students had the skills needed to be hired, they lacked the english skills to keep up in a market dominated by the language. Even though the students had learned difficult programming languages their college experience had not focused enough on English. We created an English course for programers. This course was taught with a series of lectures by the Palstart founder on the book "The 7 Habits of Highly Effective People".  John Phillip Byars created this course in order to teach English in a way that would also help the students develop their life skills and soft skills. At the end of the course all of the students gave 30 minute presentations in English on the principles learned in the course.
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

export default Projects;
