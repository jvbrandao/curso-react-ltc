import React from 'react'

class Formulario extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nome: undefined, 
            nomeTemporario: '',
            linguagem: '', 
            tipo: '', 
            dedico: true, 
            bio: ''
        };

        this.handleSubmit  = (event) => {
            event.preventDefault();
            this.setState({nome: this.state.nomeTemporario});

        };

        this.handleBack = (event) => {
            event.preventDefault();
            this.setState({
                nome: undefined, 
                nomeTemporario: '',
                linguagem: '', 
                tipo: '', 
                dedico: true, 
                bio: ''
            });
        }

        this.changeName = (event) => {
            this.setState({nomeTemporario: event.target.value});
        }
        this.changeSelect  = (event) => {
            this.setState({linguagem: event.target.value});
        }
        this.changeRadio  = (event) => {
            this.setState({tipo: event.target.value});
        }
        this.changeCheckbox  = (event) => {
            this.setState({dedico: event.target.checked});
        }
        this.changeBio  = (event) => {
            this.setState({bio: event.target.value});
        }

    }
    render(){
        const renderForm = () => {

            return(
                <>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nome: <input type="text" value={this.state.nome} onChange={this.changeName}/>
                        </label>
                        <br/><br/>
                        <label>
                            Linguagem favorita: <select type="text" value={this.state.linguagem} onChange={this.changeSelect}>
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>C++</option>
    
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            Sou:
                            <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador"/> Programador
                            <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante" /> Estudante
                        </label>
                        <br/><br/>
                        <label>
                            <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox}/> Dedico 8 horas semanais aos estudos
                        </label>
                        <br/><br/>
                        <label>
                            Bio: <textarea cols="50" value={this.state.bio} onChange={this.changeBio}/>
                        </label>
                        <br/><br/>
                        <input type="submit" value="Salvar"/>
                    </form>
                </>
            )
        }
        const renderResult = () => {
            return(
                <>
                <div>

                    <h2>Olá, {this.state.nome}</h2>
                    <br/><br/>
                    <h4>Sua linguegem favorita é: {this.state.linguagem}</h4>
                    <br/><br/>
                    <h4>Você é: {this.state.tipo}</h4>
                    <br/><br/>
                    <h4 style={this.state.dedico ? {display:"block"} : {display:"none"}}>Dedico 8 horas semanais aos estudos</h4>
                    <br/><br/>
                    <h4>Bio: <br/> {this.state.bio} </h4>
                    <button onClick={this.handleBack} type="submit">Voltar</button>
                </div>
                </>
            );
        }
        return !this.state.nome ? renderForm() : renderResult();
    }
    
}

export  default Formulario;