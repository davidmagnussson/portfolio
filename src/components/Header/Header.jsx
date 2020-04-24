import React, { Component } from 'react';
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <img src={require('../../assets/images/headerimage.jpg')} />
                </div>
                <div id="profile-picture">
                    <img src={require('../../assets/images/profilbild.jpg')} alt="Couldn't load" id="profile" />
                </div>

            </div>
        );
    }
}

export default Header;