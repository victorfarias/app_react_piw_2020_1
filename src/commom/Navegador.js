import React, { Component } from 'react';
import './Navegador.css'

class Navegador extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navegador">
                <span>Qxd Commerce</span>
                <a>Link 1</a>
                <a>Link 2</a>
            </nav>
        );
    }
}
 
export default Navegador;