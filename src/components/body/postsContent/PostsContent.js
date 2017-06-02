import React, { Component } from 'react';

import './postsContent.css';

import criseAno from '../../../images/freeimage-18962695-web.jpg';


class PostsContent extends Component {

    render() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="col-md-12">
                        <span className="label label-success">{this.props.post.label}</span>
                    </div>
                    <div className="col-md-12">
                        <small>{this.props.post.date} - </small>
                        <h3><a href="/gamaxp/conteudo1.html" className="blog-links">{this.props.post.title}</a></h3>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 div-resize">
                            <img src={criseAno} alt="Imagem verde" className="imagem-resize" />
                        </div>
                        <div className="col-md-6">
                            <p>{this.props.post.description}</p>
                            <p>
                                <a href={undefined} className="link-blog">Saiba mais >></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <hr className="hr-verde" />
                </div>

            </div>

        );
    }
}

export default PostsContent;

