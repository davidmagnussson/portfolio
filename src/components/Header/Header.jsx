import React, { Component } from 'react';
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div>
                <div id="header"></div>
                <div id="profile-picture">
                    <img src={require('../../assets/images/profilbild.jpg')} alt="Couldn't load" id="profile" />
                </div>

            </div>
        );
    }
}

export default Header;