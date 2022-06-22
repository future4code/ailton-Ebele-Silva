import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
border: 1px solid gray;
border-radius: 4px;
padding: 10px;
margin: 10px;
width: 32vw;
display: flex;
align-items: center;
justify-content: space-between;
background-color: beige;
`

const Container = styled.div`
 background-color: bisque;
 border-radius: 8px;
 display: flex;
 flex-direction: column;
 width: 40vw;
 justify-content: center;
 align-items: center;
 padding-top: 1vw;
 padding-bottom: 8vh;
 padding-top: 8vh;
 margin: 24vh auto;
 `
const BotaoCadastro = styled.div`
 display: flex;
 justify-content: center;
 align-items: center; 
 border: 1px solid gray;
 width: 12vw;
 background-color:antiquewhite ;
 border-radius: 2px;
`


export default class TelaListaUsuarios extends Component {

  state = {
    usuarios: []
  }

  componentDidMount(){
    this.pegarUsuarios()
  }

  // pegarUsuarios = () => {
  pegarUsuarios = async () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    // axios.get(url, {
    //   headers: {
    //     Authorization: "ebele-silva-ailton"
    //   }
    // })
    // .then((res)=>{
    //   this.setState({usuarios: res.data})
    // })
    // .catch((err)=>{
    //   alert("Ocorreu um problema, tente novamente.")
    // })

    try {
      const res = await  axios.get(url, {
        headers: {
          Authorization: "ebele-silva-ailton"
        }
      })

      this.setState({usuarios: res.data})
    } catch (err) {
      alert("Ocorreu um problema, tente novamente.")
    }
  }

  deletarUsuario = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, {
      headers:{
        Authorization: "ebele-silva-ailton"
      }
    })
    .then( (res) => {
      alert("Usuário deletado(a) com sucesso!")
      this.pegarUsuarios()
    })
    .catch((err) => {
      alert("Ocorreu um erro. Tente novamente")
    })
  }

  // confirmarDelete = (id) =>{
  //   alert("Tem certeza de que deseja deletar?")
  // }
  render() {
    console.log(this.state.usuarios)
    const listaUsuarios = this.state.usuarios.map((user)=>{
      return  <CardUsuario key={user.id}>
          {user.name}
          <button onClick={()=>this.deletarUsuario(user.id)}> X </button>
        </CardUsuario>
      
    })
    return (
      <Container>
        <BotaoCadastro onClick={this.props.irParaCadastro}>Ir para tela de Cadastro</BotaoCadastro>
        <h1>Usuários</h1>
        {listaUsuarios}
      </Container>
    )
  }
}
