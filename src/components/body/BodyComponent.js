import React, { Component } from 'react';

import FormBodyComponent from './formBody/FormBodyComponent';
import BodyContent from './bodyContent/BodyContent';

import posts from './posts.json';

class BodyComponent extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        this.setState({
            posts: posts
        });
    }

    render() {
        return (

            <section className="container">
                <div className="row responsivo-centralizar">

                    <div className="col-md-4 form-responsivo">
                        <FormBodyComponent />                        
                    </div>

                    <div className="col-md-8" id="conteudo">                        
                        {
                            this.state.posts.map(post => (
                                <BodyContent 
                                    key={post.id}
                                    post={post}/>
                            ))
                        }                       

                    </div>
                </div>
            </section>
        );
    }
}

export default BodyComponent;