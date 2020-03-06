import React from 'react';

class ComponenteClasse extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.name = props.name;
    //     this.sobrenome = props.sobrenome;
    // }
    render(){
        return <div> Olá {this.props.name} {this.props.sobrenome} </div>;
    }
}

export default ComponenteClasse;