import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   width: 50 vw;
//   height: 60vh;
//   justify-content: center;
//   align-items: center;
// `


class App extends React.Component {
  state = {
    nome: '',
    email: '',
    dados: [],
    pagina: false
  }

  onChangeInput = e => {
    this.setState({ nome: e.target.value })
  }
  onChangeInputEmail = e => {
    this.setState({ email: e.target.value })
  }
  componentDidMount() {
    this.getDados()
  }
  getDados = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'ebele-silva-ailton'
          }
        }
      )
      .then((response) => {
        this.setState({ dados: response.data})
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  mudapagina = () => {
    this.setState({
      pagina: !this.state.pagina
    })
  }
  creatDados = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'ebele-silva-ailton'
          }
        }
      )
      .then(response => {
        console.log(response)
        this.getDados();
        alert('Usuario Criado')
      })
      .catch(erro => {
        console.log(erro)
        alert('Erro ao cadastrar usuario')
      })
  }

  deletarUsuario= (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {Authorization: 'ebele-silva-ailton'}
    }
    )
  }
render() {
    const arrayDados = this.state.dados.map(item => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={()=>this.deletarUsuario(item.id)}> Apagar usuário </button>
        </div>
      )
    })
    console.log(this.state.dados)
    console.log(arrayDados)
    return (
      <div>
        <h1>Cadastro</h1>
        <button onClick={this.mudapagina}>Outra Pagina </button>
        {this.state.pagina === false && (
          <section>
            <label>
              Nome:
              <input value={this.state.nome} onChange={this.onChangeInput} />
              <label>
                E-mail:
                <input
                  value={this.state.email}
                  onChange={this.onChangeInputEmail}
                />
              </label>
              <button onClick={this.creatDados}>Criar Usuario</button>
            </label>
          </section>
        )}

        {this.state.pagina === true && (
          <div>
            <h1>lista de cadastro</h1>
            {arrayDados}
          </div>
        )}
      </div>
    )
  }
}

export default App