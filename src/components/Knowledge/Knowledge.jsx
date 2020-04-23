import React, { Component } from 'react';
import "./Knowledge.scss";

class Knowledge extends Component {
    render() {
        return (
            <div className="Knowledge">
                <img src={this.props.img} />
            </div>
        );
    }
}

export default Knowledge;