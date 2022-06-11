

import React from "react";



class App extends React.Component {
  state = {
    pessoas: [
      {
        nome: "Ebele",
        email: "Socorro!",
       
      },
    ],
  
    valorInputPessoa: "",
    valorInputEmail: "",
    
  };

  adicionaPessoa = () => {
    
    const novaPessoa = {
     
      nome: this.state.valorInputPessoa,
      email: this.state.valorInputEmail,

    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];

   
    this.setState({ pessoas: novoPessoas });
    this.setState({
      valorInputPessoa: "",
      valorInputEmail: "",
      
    });
  };

  onChangeInputPessoa = (event) => {
    
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };
  
  render() {
    
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          <strong>{pessoa.nome} </strong> : {pessoa.email} 
        </p>
      );
    });

    return (
      <div class="container">
         <div>{listaDeComponentes}</div>
        <div>
          <input
          
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Mensagem"}
          />
      
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </div>
      
      </div>
    );
  }
}

export default App;
