import React, { Component } from 'react'
import styled from "styled-components"


const InputNome = styled.input`
width: 9vw;
`
const InputMensagem = styled.input`
width: 85vw;
`



export default class Botao extends Component {
  render() {
    return (
      <div>
        <InputNome value={this.props.valorInputNome} onChange={this.props.NovoNome} placeholder={"Seu nome"}> 
        </InputNome>

        <InputMensagem value={this.props.valorMensagem} onChange={this.props.NovaMensagem} placeholder={"Digite a mensagem"}>
        </InputMensagem>

        <button onClick={this.props.aoEnviar}> Enviar
        </button>
      </div>
    )
  }
}

