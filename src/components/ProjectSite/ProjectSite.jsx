import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import './ProjectSite.scss'
import Button from '../Button/Button.jsx';

class ProjectSite extends Component {
    constructor(props) {
        super(props);

        if (!this.props.linkGithub || !this.props.linkWebsite) {
            this.outerColSize = 5;
            this.innerColSize = 2;
            this.center = true;
        } else {
            this.outerColSize = 4;
            this.innerColSize = 2;
            this.center = false;
        }
    }
    render() {
        return (
            <div id="Project_site">
                <div id="Project_site-content">
                    <Link to="/">
                        <Button content="Go Back" position="left" class="goBack" />
                    </Link>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.secondaryTitle ? this.props.secondaryTitle : ""}</h2>
                    <p className="descriptionText"><strong>{this.props.description}</strong></p>
                    <h3 className="programsUsedText">Programs used: <i>{this.props.programsUsed ? this.props.programsUsed : ""}</i></h3>
                    <div id="buttons">
                        <Row>
                            <Col xs={this.outerColSize} md={this.outerColSize} lg={this.outerColSize} ></Col>

                            {this.props.linkWebsite ?
                                <Col xs={this.innerColSize} md={this.innerColSize} lg={this.innerColSize} >
                                    <a href={this.props.linkWebsite ? this.props.linkWebsite : "./"} target="_blank" rel="noopener noreferrer" >
                                        <Button content="Go to Website" position={this.center ? "center" : "right"} name="linkWebsite" />
                                    </a>
                                </Col>
                                :
                                ""
                            }


                            {this.props.linkGithub ?
                                <Col xs={this.innerColSize} md={this.innerColSize} lg={this.innerColSize} >
                                    <a href={this.props.linkGithub ? this.props.linkGithub : "./"} target="_blank" rel="noopener noreferrer" >
                                        <Button content="Go to GitHub" position={this.center ? "center" : "left"} name="linkGithub" />
                                    </a>
                                </Col>
                                :
                                ""
                            }

                            <Col xs={this.outerColSize} md={this.outerColSize} lg={this.outerColSize} ></Col>
                        </Row>
                    </div>
                </div>
                <img src={this.props.img} alt="Could'nt load" style={{ height: "100%", width: "100%", objectFit: "" }} />
            </div>
        );
    }
}

export default ProjectSite;