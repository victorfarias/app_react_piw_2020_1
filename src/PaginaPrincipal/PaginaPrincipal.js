import React, { Component } from 'react';
import Navegador from '../commom/Navegador';
import Galeria from './Galeria';

class PaginaPrincipal extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Navegador></Navegador>
            <Galeria></Galeria>
        </div> );
    }
}
 
export default PaginaPrincipal;