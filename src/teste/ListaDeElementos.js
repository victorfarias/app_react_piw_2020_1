import React, { Component } from 'react';

class ListaDeElementos extends Component {
    state = { 
        produtos: [
            {
                nome: "Produto 1",
                preco: "R$ 15,00",
            },
            {
                nome: "Produto 2",
                preco: "R$ 12,00",
            },
            {
                nome: "Produto 3",
                preco: "R$ 9,00",
            }
        ]
    }
    render() { 
        

        // Modo 1
        // let elementos_div = [];
        // // Python: for produto in this.state.produtos
        // for(let produto of this.state.produtos){
        //     console.log(produto);
        //     elementos_div.push(
        //         (<div>
        //             <h3>{produto.nome}</h3>
        //             <span>{produto.preco}</span>
        //         </div>)
        //     );
        // }

        // Modo 2
        let elementos_div = this.state.produtos.map(
            (produto)=>(
                <div>
                    <h3>{produto.nome}</h3>
                    <span>{produto.preco}</span>
                </div>
            )
        )

        return ( 
            <div>
                {elementos_div}
            </div>
        );
    }
}
 
export default ListaDeElementos;