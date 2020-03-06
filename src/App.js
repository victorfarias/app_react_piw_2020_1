import React from 'react';
import ComponenteFuncional from './teste/Funcao';
import ComponenteClasse from './teste/ComponenteClasse';
import MyButton from './teste/MyButton';
import MyTextInput from './teste/MyTextInput';

class App extends React.Component {

  constructor(props){
    super(props);
    this.name = "Joao"; // Nao fazer isso
  }

  changedHandler(event){
    console.log("Mudou o input");
    console.log(event.target.value);
    // this.name = event.target.value; // já já
  }

  render() { 
    return ( 
      <div>
        <ComponenteFuncional ></ComponenteFuncional>
        <ComponenteClasse name={this.name} sobrenome="Farias"></ComponenteClasse>
        <ComponenteClasse name="Tiago" sobrenome="Sei lá"></ComponenteClasse>
        <MyButton></MyButton>
        <MyTextInput changed={this.changedHandler}></MyTextInput>
      </div>
     );
  }
}
 
export default App;