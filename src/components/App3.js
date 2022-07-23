import React from 'react';

class App3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: '', idade: 0};
    }

    changeName = (event) => {
        this.setState({nome: event.target.value})
    }
    changeIdade = (idade) => {
        this.setState({idade: idade.target.value})
    }

    render(){
    return(
        <>
            Nome: <input type="text" onChange={this.changeName} value={this.state.nome}></input>
            <br/>
            <br/>
            Idade: <input type="text" onChange={this.changeIdade} value={this.state.idade}></input>
           
            <p>
                Olá, {this.state.nome}
            </p>            
            <p>
                idade: {this.state.idade}
            </p>
        </>
    );
    }
}

export default App3;
