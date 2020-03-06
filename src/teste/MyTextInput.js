import React from 'react';

class MyTextInput extends React.Component {
    constructor(props){
        super(props);
        this.changedHandler = props.changed;
    }
    render() { 
        return ( <input className="fundo-azul" onChange={this.changedHandler} type="text"></input> );
    }
}
 
export default MyTextInput;