import React, { Component } from 'react';
import './ClassesDinamicas.css';

// Botao que começa com a cor original e quando clica troca para azul
// e vice-versa, quando está com cor azul, troca para a original
class ClassesDinamicas extends Component {
    state = { 
        azul: false,
    }

    alternarAzul = () =>{
        this.setState({
            azul: !this.state.azul,
        })
        console.log(this.state.azul);
    }

    render() { 

        // let classes;
        // if(this.state.azul==true){
        //     classes = "botao azul";
        // }else{
        //     classes = "botao";
        // }

        let classes_list = [];
        classes_list.push("botao");
        if(this.state.azul == true){
            classes_list.push("azul");
        }
        let classes = classes_list.join(" ");

        return ( 
            <button className={classes} onClick={this.alternarAzul}>
                Me clique
            </button>
         );
    }
}
 
export default ClassesDinamicas;