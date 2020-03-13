import React, { Component } from 'react';
import CardProduto from './CardProduto';
import './Galeria.css';
// import imagem from '../assets/pic.png; 

class Galeria extends Component {
    state = { 
        produtos: [
            {
                nome: "Liquidificador",
                preco: "100",
            },
            {
                nome: "Aspirador",
                preco: "200",
            },
            {
                nome: "Geladeira",
                preco: "1000",
            },
            {
                nome: "Fogao",
                preco: "400",
            },
            {
                nome: "Airfryer",
                preco: "200",
            },
            {
                nome: "Torradeira",
                preco: "100",
            },
            {
                nome: "Caixa JBL",
                preco: "2000",
            },
            {
                nome: "Microondas",
                preco: "400",
            },
        ]
    }
    
    recebiClick = () => {
        console.log("Alguém foi clicado");
    }

    render() { 
        // modo 1
        // let cardProdutos = []
        // for(let produto of this.state.produtos){
        //     cardProdutos.push(<CardProduto nome={produto.nome} preco={produto.preco}></CardProduto>)
        // }
        return ( 
            <div className="galeria">
                {/* {cardProdutos} */}
                {this.state.produtos.map(
                    (produto) => (<CardProduto 
                        nome={produto.nome} 
                        preco={produto.preco}
                        foiClicado={this.recebiClick}>
                        </CardProduto>)
                )}
            </div>
         );
    }
}
 
export default Galeria;