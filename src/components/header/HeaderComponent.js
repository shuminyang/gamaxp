import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Logo from './logo/Logo';

class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Logo />
            </div>
        );
    }
}

export default HeaderComponent;