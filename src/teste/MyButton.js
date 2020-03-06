import React from 'react';
import './MyButton.css'

class MyButton extends React.Component {

    state = {
        clicado: false,
    }

    clickHandler = (event) => {
        this.setState({
            clicado: this.state.clicks + 1,
            disabled: this.state.disabled,
        })
    }

    render() { 
        return (<button className="fundo-azul" onClick={this.clickHandler}>
                    Clicks: {this.state.clicks}
                </button> );
    }
}
 
export default MyButton;