import React, { Component } from 'react';
import Description from './description/Description';
import Form from './footerForm/Form';

import './footerComponent.css';

class FooterComponent extends Component {
    render() {
        return (
            <section className="footer-blog" id="bottom-help">
                <div className="container">
                    <div className="row">
                        <Description />
                        <Form />
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterComponent;