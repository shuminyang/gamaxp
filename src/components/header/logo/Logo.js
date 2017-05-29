import React, { Component } from 'react';

import './logo.css';

class Logo extends Component {
    render() {
        return (
            <div>
                <div className='img-header'>
                    <header className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2'>
                                <div className='texto-header'>
                                    <h2>
                                        <span className='header-back'>CHEGOU O SEU NOVO ESPECIALISTA </span><br />
                                        <span className='header-back'>EM FINANÇAS E ECONOMIA. </span><br />
                                        <span className='header-back'>O DR. DINHEIRO VAI CURAR </span><br />
                                        <span className='header-back'>O SEU BOLSO!</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <div className='small-border-header'></div>

                <hr id='fixTop' />

            </div>
        );
    }
}

export default Logo;