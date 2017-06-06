import React, { Component } from 'react';

import PostsContent from '../postsContent/PostsContent';
import PostsForm from '../postsForm/PostsForm';

class PostsComponent extends Component {

    constructor() {
        super();
        this.state = {
            formOpen: false
        };
    }

    handleFormOpen = () => {
        this.setState({
            formOpen: true
        });
    };

    handleFormClose = () => {
        this.setState({
            formOpen: false
        });
    };

    handleFormSubmit = () => {
        this.setState({
            formOpen: false
        });
    };

    render() {
        if (!this.state.formOpen) {
            return (
                <div>
                    <div className='col-md-12 '>
                        <div className='col-md-12 '>
                            <button className='btn btn-primary pull-right' onClick={this.handleFormOpen}>Criar novo post</button>
                        </div>
                    </div>
                    {
                        this.props.posts.map(post => (
                            <PostsContent
                                key={post.id}
                                post={post} />
                        ))
                    }
                </div>

            );
        } else {
            return (
                <div>
                    <div className='col-md-12 '>
                        <div className='col-md-12'>
                            <button className='btn btn-danger pull-right' onClick={this.handleFormClose}>Cancelar post</button>
                        </div>
                    </div>
                    <PostsForm createPost={this.props.createPost}
                        formSubmetido={this.handleFormSubmit}/>
                </div>
            );
        }
    }

}

export default PostsComponent;