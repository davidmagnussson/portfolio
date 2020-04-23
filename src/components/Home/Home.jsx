import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "./Home.scss";
import Button from '../Button/Button.jsx';
import Project from '../Project/Project.jsx';
import Knowledge from '../Knowledge/Knowledge.jsx';

class Home extends Component {
    contactMe = () => {
        console.log("test");
    }

    render() {
        return (
            <div id="Home">
                <div>
                    <h1><i>Hello! I am David Magnusson. Welcome to my personal website / portfolio!</i></h1>
                    <a href="mailto:davidmagnusson97@gmail.com" ><Button name="contact" position="center" width="120" height="50" content="Contact me" /></a>
                </div>
                <div id="previous-projects">
                    <h2>Previous projects</h2>
                    <Project id="clintri" img={require("../../assets/images/clintri.PNG")} name="ClinTri" />
                    <Project id="studyguide-coach" img={require("../../assets/images/StudyGuide.PNG")} name="StudyGuide Coach" />
                    <Project id="groupvisualizationtool" img={require("../../assets/images/Visualizing_groups.PNG")} name="Group Visualization Tool" />
                    <Project id="gametrendanalytics" img={require("../../assets/images/default.PNG")} name="Game Trend Analytics" />
                </div>
                <div id="previous-knowledge">
                    <h2>Previous programs and libraries I have worked with</h2>
                    <div id="knowledges">
                        <Knowledge img={require('../../assets/images/react.jpg')} />
                        <Knowledge img={require('../../assets/images/html.jpg')} />
                        <Knowledge img={require('../../assets/images/meteor.png')} />
                        <Knowledge img={require('../../assets/images/js.png')} />
                        <Knowledge img={require('../../assets/images/scss.png')} />
                        <Knowledge img={require('../../assets/images/ps.jpg')} />
                        <Knowledge img={require('../../assets/images/xd.png')} />
                        <Knowledge img={require('../../assets/images/firebase.png')} />
                    </div>
                </div>
                <hr style={{ marginTop: "100px", border: "0px", borderTop: "3px solid rgba(80, 80, 80, 0.6)" }} />

                <div id="About">
                    <Row>
                        <Col xs={4} md={4} lg={4}>
                            <div id="about-picture">
                                <img src={require('../../assets/images/profilbild.jpg')} id="profile" />
                            </div>
                        </Col>
                        <Col xs={8} md={8} lg={8}>
                            <div id="about-text">
                                <h2>Who is David?</h2>
                                <p>
                                    Hello! I am David Magnusson and I am from Stockholm, Sweden. I am a master’s student at the Royal Institute of Technology in Stockholm. I am pursuing a degree in Interactive media technology with a specialization on visual media and visualization. Few of my interest besides programming is american football, padel and photography among others!

                                    If you are looking for someone to help you create your own website hit me up! I would gladly help you. Looking forward to hearing from you soon!
                                     </p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="footer" className="vertical-align">
                    <footer>
                        <Row>
                            <Col xs={4} md={4} lg={4}>
                                <h3>Find me at my socials: </h3>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <div id="socials">
                                    <a href="https://www.linkedin.com/in/david-magnusson-293403161/" target="_blank" rel="noopener noreferrer" ><img src={require("../../assets/images/linkedin.png")} alt="LinkedIn" /></a>
                                    <a href="https://www.facebook.com/david.magnusson.182" target="_blank" rel="noopener noreferrer" ><img src={require("../../assets/images/github.png")} alt="Facebook" /></a>
                                    <a href="https://github.com/davidmagnussson/" target="_blank" rel="noopener noreferrer" ><img src={require("../../assets/images/facebook.png")} alt="GitHub" /></a>
                                </div>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                            </Col>
                        </Row>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Home;