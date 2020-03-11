import React, { Component } from 'react';
import './CardProduto.css'

class CardProduto extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card">
                <h3>Nome do produto</h3>
                <span>R$ 120,00</span>
            </div>
        );
    }
}
 
export default CardProduto;