import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Project.scss";
import Button from '../Button/Button.jsx';

class Project extends Component {
    goTo = (location) => {
        console.log(location);
        window.location.href = "http://localhost:3000/" + location;
    }

    render() {
        return (
            <div id={this.props.id} className="Project">
                <div id={this.props.id + "-image"} className="project-content">
                    <div className="projectOverlay">
                        <h3><strong>{this.props.name}</strong></h3>
                    </div>
                    <img src={this.props.img} height="100%" width="100%" style={{ borderRadius: "10px" }} />
                </div>
                {/* <Link to={this.props.id}> */}
                <Button class="projectButton" name={this.props.id + "--button"} width="90" height="45" content="Show" />
                {/* </Link> */}
            </div >
        );
    }
}

export default Project;