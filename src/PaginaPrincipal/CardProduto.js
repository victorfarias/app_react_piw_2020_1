import React, { Component } from 'react';
import './CardProduto.css'

class CardProduto extends Component {
    state = { 
        clicks: 0,
    }

    incrementarClick = () =>{
        this.setState({clicks : this.state.clicks+1})
    }

    foiClicado = () =>{
        this.incrementarClick();
        this.props.foiClicado()
    }

    render() { 
        return ( 
            <div onClick={this.foiClicado} className="card">
                <h3>{this.props.nome} {this.state.clicks}</h3>
                <span>R$ {this.props.preco}</span>
            </div>
        );
    }
}
 
export default CardProduto;