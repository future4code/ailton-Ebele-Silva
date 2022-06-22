import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
background-color: bisque;
 border-radius: 8px;
 display: flex;
 flex-direction: column;
 width: 50vw;
 justify-content: center;
 align-items: center;
 padding-top: 1vw;
 padding-bottom: 8vh;
 margin: 24vh auto;
 color: black;
 `
 const BotaoLista = styled.div`
 display: flex;
 justify-content: center;
 align-items: center; 
 border: 1px solid gray;
 width: 14vw;
 background-color:antiquewhite ;
 border-radius: 2px;
 color: black;
 `

 const BotaoCadastrar = styled.div`
 display: flex;
 justify-content: center;
 align-items: center; 
 border: 1px solid gray;
 width: 8vw;
 background-color: ;
 border-radius: 2px;
 color: black;
 background-color:antiquewhite ;
 `
const Titulo = styled.h1`
color:grey ;
display: flex;
justify-content: center;
align-items: center;
`

export default class TelaCadastro extends Component {

 

  state = {
    nome: "",
    email: ""
  }
  
  recebeNome = (event)=> {
    this.setState({nome: event.target.value})
  }

  recebeEmail = (event)=> {
    this.setState({email: event.target.value})
  }

  criarCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nome,
      email:this.state.email
    }

    axios.post(url, body, {
      headers:{
        Authorization: "ebele-silva-ailton"
      }
    })
    .then((res)=> {
      alert("Usuário(a) cadastrado(a) com sucesso!")
      this.setState({nome:"", email: ""})
    })
    .catch((err)=> {
      alert("Erro! Tente novamente.")
    })
  }


  render() {
    return (
      <Container>
         <Titulo>Seja bem vinde a Labenusers!</Titulo>
        <h2>Cadastro</h2>
        <BotaoLista onClick={this.props.irParaLista}> Ir para Lista de Usuários</BotaoLista><br/>
        <input 
          placeholder={'Nome'} 
          value={this.state.nome}
          onChange={this.recebeNome}
        /><br/>
        <input
         placeholder={'E-mail'} 
         value={this.state.email}
         onChange={this.recebeEmail}
         /><br/>
        <BotaoCadastrar onClick={this.criarCadastro}>Cadastrar</BotaoCadastrar>
      </Container>
    )
  }
}