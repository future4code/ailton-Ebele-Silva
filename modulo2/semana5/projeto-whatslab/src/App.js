import React from "react"
import styled from "styled-components"
import Botao from "./Components/Botao"


const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
margin:0 auto;
background-color: red;
`


const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
background-color: purple;
height: 40px;
width: 100%;
font-size: 3vh;
color: white;
`
const Footer = styled.div`
background-color: purple;
height: 50px;
width: 100% ;
`


const Main = styled.div`
background-color:gray;
height: 100%;
width: 100%;

`
 class App extends React.Component {
  state={
    
    inputNome:"",
    inputMensagem: "",
    conversa: [],
  }

  onChangeNome=(event)=>{
    console.log(event.target.value)
    this.setState({inputNome: event.target.value
    })
  }
  onChangeMensagem=(event)=>{
    console.log(event.target.value)
    this.setState({inputMensagem: event.target.value
    })
  }
  enviarMensagem=()=>{
    let arrayMensagem = [...this.state.conversa];
    arrayMensagem.push({nome:this.state.inputNome, mensagem:this.state.inputMensagem})
   

    this.setState({conversa:arrayMensagem})
  }
  render() {
    const arrayCardMensagem=this.state.conversa.map((item, index) =>{
      return (
        <div key={index}> 
          <p> <strong> {item.nome}:</strong> {item.mensagem} </p>
      </div>
      )
    })
    return (
      <Container>
        <Header> WhatsLab </Header>
        <Main>
          {arrayCardMensagem}
        </Main>
        <Footer>
      <Botao valorNome={this.state.inputNome} valorMensagem={this.state.inputMensagem} NovoNome={this.onChangeNome} NovaMensagem={this.onChangeMensagem} aoEnviar={this.enviarMensagem}> </Botao>
         </Footer>
        
      </Container>
    )
  }
}
export default App