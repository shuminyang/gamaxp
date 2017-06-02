import React, { Component } from 'react';

import FormBodyComponent from './formBody/FormBodyComponent';
import PostsComponent from './postsComponent/PostsComponent';

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

    handleCreatePost = (titulo, tag, descricao) => {
        const tamanhoId = this.state.posts.length;
        const data = Date.now;
        const newPost = {
            id: tamanhoId,
            date: data,
            title: titulo,
            label: tag,
            description: descricao,
            image: ''
        };

        this.setState({
            posts: this.state.posts.concat(newPost)
        });

        console.log(this.state.posts);
    };

    render() {
        return (

            <section className='container'>
                <div className='row responsivo-centralizar'>

                    <div className='col-md-4 form-responsivo'>
                        <FormBodyComponent />
                    </div>

                    <div className='col-md-8' id='conteudo'>
                        <PostsComponent 
                            posts={this.state.posts} 
                            createPost={this.handleCreatePost}/>

                    </div>
                </div>
            </section>
        );
    }
}

export default BodyComponent;