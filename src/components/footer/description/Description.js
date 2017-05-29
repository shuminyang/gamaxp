import React, { Component } from 'react';
import facebook from '../../../images/facebook_white.png';
import instagram from '../../../images/instagram_white.png';

import './description.css';

class Description extends Component {

    render() {
        return (
            <div className='col-md-8'>
                <div className='col-md-10 col-md-offset 1' >
                    <div className='col-md-10 col-md-offset-1 banner-footer '>
                        <img className='logo-header' src='http://i.imgur.com/l9ryH9V.png' alt='Dr. Dinheiro Banner' />
                    </div>
                    <div className='col-md-12'>
                        <div className='col-md-10 col-md-offset-1'>
                            <label className='texto-bottom'>QUEM SOMOS</label>
                        </div>
                        <div className='col-md-5 col-md-offset-1 text-justify'>
                            <small><small className='texto-bottom'>
                                O Dr. Dinheiro é composto por especialistas em finanças. Queremos curar o bolso de milhões de brasileiros, educando, ajudando e tirando todas as dúvidas financeiras para que você possa sair do vermelho.
                            </small></small>
                            <hr className='hr-footer' />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='col-md-10 col-md-offset-1'>
                            <a href='https://www.facebook.com'>
                                <img src={facebook} className='facebook-footer' alt="facebook's Logo"/>
                            </a>
                            <a href='https://www.instagram.com'>
                                <img src={instagram} className='instagram-footer' alt="instagram's Logo"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Description;

// style='font-weight: bold;'
// style='padding-top: 25px;'