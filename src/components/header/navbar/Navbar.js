import React, { Component } from 'react';
import drDinheiro from '../../../images/LOGO_DrDinheiro.png';

import './navbar.css';


class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href={undefined} className='navbar-brand'><img src={drDinheiro} alt='Logo' className='logo-brand' /></a>
                    </div>
                    <div>
                        <ul className='nav navbar-nav navbar-right'>
                            <li className='li-hover-nav'><a href={undefined} ><i className='fa fa-home' aria-hidden='true'></i> INÍCIO</a></li>
                            <li className='li-hover-nav'><a href={undefined} ><i className='fa fa-user' aria-hidden='true'></i> SOBRE</a></li>
                            <li className='li-hover-nav'><a href={undefined} ><i className='fa fa-book' aria-hidden='true'></i> CONTEÚDOS</a></li>
                            <li className='li-hover-nav'><a href={undefined} ><i className='fa fa-comments-o' aria-hidden='true'></i> CONTATO</a></li>
                            <li className='li-hover-nav'><a href={undefined} ><i className='fa fa-heart' aria-hidden='true'></i> CADASTRE-SE</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;