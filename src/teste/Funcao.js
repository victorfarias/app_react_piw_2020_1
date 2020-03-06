import React from 'react';
function multiply(a,b){
    return a*b;
}

function ComponenteFuncional(){
    let name = "joao";
    return (<div> Olá, {name}. 1+2 = {1+2}. <br></br>
                primeira letra: {name[0]} <br></br>
                chamada de funcao: {multiply(2,3)}
            </div>);
}

export default ComponenteFuncional;