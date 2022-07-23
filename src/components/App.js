import React from 'react';

class App extends React.Component{
  render(){
    return(
      <>
        <p>
          Primeiro Parágrafo
        </p>
        <p>
          Segundo Parágrafo
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    );
  }
}

export default App;
