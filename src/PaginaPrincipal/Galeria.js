import React, { Component } from 'react';
import CardProduto from './CardProduto';
// import imagem from '../assets/pic.png; 

class Galeria extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                {/* <img src={imagem}></img> */}
            </div>
         );
    }
}
 
export default Galeria;