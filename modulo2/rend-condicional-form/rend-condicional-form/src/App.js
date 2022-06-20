
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";
import styled from "styled-components";
import React from "react";

const Formulario = styled.div`
display: flex;
/* justify-content: center; */
align-items:center;
flex-direction: column;
background-color: beige;
width: 40vw;
height: 100%;
margin: auto;
padding: 4%;
`
const Botao = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

`


class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
          return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  }
  irParaProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa +1})
  }
 
render (){
  return (
    <Formulario> 
    <div>  {this.renderizaEtapa()} </div>
    <br></br>
    <Botao>
      {this.state.etapa !==4 && (
         <button onClick={this.irParaProximaEtapa}> Próxima etapa </button> )}
    </Botao>
  </Formulario>
  )
}
}



export default App;
