import React, { Component } from 'react';

import './formBodyComponent.css';

class FormBodyComponent extends Component {
    render() {
        return (
            <section id="formFix">
                <div className="col-md-12">
                    <section className="well well-lg clearfix">
                        <div className="col-md-12">
                            <div className="alert alert-danger">
                                <ul>
                                    <li>Erro</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="text-center">NÃO PERCA NENHUMA DICA!!</h4>

                        <div className="form-group">
                            <label>Nome completo*</label>
                            <input type="text" name="nome" placeholder="Seu nome completo" className="form-control tamanho-input" />
                        </div>

                        <div className="form-group">
                            <label>E-mail*</label>
                            <input id="email" type="text" name="email" placeholder="Seu e-mail" className="form-control tamanho-input" />
                        </div>

                        <div className="form-group">
                            <label>Qual assunto mais lhe interessa?</label>
                            <select className="form-control tamanho-input" name="motivo">
                                <option value=""></option>
                                <option value="Realizar um sonho">Realizar um sonho</option>
                                <option value="Como pagar minhas dívidas?">Como pagar minhas dívidas?</option>
                                <option value="Como investir dinheiro?">Como investir dinheiro?</option>
                                <option value="Como reformar minha casa?">Como reformar minha casa?</option>
                                <option value="Como adquirir um bem?">Como adquirir um bem?</option>
                            </select>
                        </div>

                        <small><small>Campos marcados com * são obrigatórios</small></small>

                        <div>
                            <button type="button" className="btn btn-primary pull-right btn-lg">Ver mais informacão</button>
                        </div>

                    </section>
                </div>

            </section>
        );
    }
}

export default FormBodyComponent;