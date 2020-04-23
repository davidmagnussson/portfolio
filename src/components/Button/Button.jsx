import React, { Component } from 'react';
import "./Button.scss";

class Button extends Component {
    constructor(props) {
        super(props);

        if (this.props.position) {
            this.position = this.props.position;
        } else {
            this.position = "";
        }
    }

    render() {
        return (
            <div style={{ textAlign: this.position }}>
                <button id={this.props.name ? this.props.name : ""} className={this.props.class ? this.props.class + " Button" : "Button"} style={{ width: this.props.width + 'px', height: this.props.height + 'px' }} onClick={this.props.onclick ? this.props.onclick : null}>
                    <span>{this.props.content}</span>
                </button>
            </div>
        );
    }
}

export default Button;