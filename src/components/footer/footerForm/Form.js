import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    render() {
        return (
            <div className="col-md-4">
                
                <div className="col-md-12">
                    <h3>Contate-nos</h3>
                </div>
                <div className="col-md-12">
                    <input className="form-control contatos-footer" type="text" placeholder="Nome Completo" />
                </div>
                <div className="col-md-12">
                    <input className="form-control contatos-footer" type="text" placeholder="E-mail" />
                </div>

                <div className="col-md-12 ">
                    <textarea className="form-control contatos-footer"></textarea>
                </div>
                <div className="col-md-12">
                    <button className=" btn btn-default pull-right btn-sm contatos-footer">Enviar</button>
                </div>                

            </div>
        );
    }
}

export default Form;