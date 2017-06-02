import React, { Component } from 'react';

import './postsForm.css';

class PostsForm extends Component {

    constructor() {
        super();
        this.state = {
            titulo: '',
            tag: '',
            descricao: ''
        };
    }


    handleCreatePost = () => {
        let titulo = this.state.titulo;
        let tag = this.state.tag;
        let descricao = this.state.descricao;

        this.setState({
            titulo: '',
            tag: '',
            descricao: ''
        });

        this.props.createPost(titulo, tag, descricao);
        this.props.formSubmetido();
    };

    handleChangeTitulo = (event) => {
        this.setState({
            titulo: event.target.value
        });
    };

    handleChangeTag = (event) => {
        this.setState({
            tag: event.target.value
        });
    };

    handleChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        });
    };

    render() {
        return (
            <div>
                <div className='col-md-12'>
                    <div className='col-md-6 col-md-offset-3'>
                        <div className='alert alert-danger'>
                            <ul>
                                <li>Erro</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-md-12 form-group'>
                        <label>Título: </label>
                        <input type='text' value={this.state.titulo} className='form-control' onChange={this.handleChangeTitulo} />
                    </div>
                    <div className='col-md-12 form-group'>
                        <label>Tag: </label>
                        <select value={this.state.tag} className='form-control' onChange={this.handleChangeTag}>
                            <option></option>
                            <option>Economia</option>
                            <option>Finanças</option>
                            <option>Viagem</option>
                        </select>
                    </div>
                    <div className='col-md-12 form-group'>
                        <label>Descrição: </label>
                        <textarea ref='textareaPost' rows='5' className='form-control' value={this.state.descricao} onChange={this.handleChangeDescricao}></textarea>
                    </div>

                    <div className='col-md-12'>
                        <button className='btn btn-success pull-right' onClick={this.handleCreatePost}>Criar novo post</button>
                    </div>

                </div>

                <div className="col-md-12">
                    <hr className="hr-verde" />
                </div>

            </div>
        );
    }
}

export default PostsForm;