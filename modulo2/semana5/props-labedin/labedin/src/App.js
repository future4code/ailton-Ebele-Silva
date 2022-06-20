import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import avatar from './img/avatar.png'
import seta from './img/seta.png'
import mail from './img/mail.png'
import odonto from './img/odonto.png'
import aula from './img/aula.png'
import endereco from './img/endereco.png'
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
 const SectionsCardGrande = styled.div`
width: 40vw;
margin: 10px 0;
` 
const TituloContainer = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
 
 
  return (
    <Container>
    {/* //<div className="App"> */}
      <SectionsCardGrande className="page-section-container">
      {/* <div className="page-section-container"> */}
        {/* <h2>Dados pessoais</h2> */}
        <TituloContainer>Dados pessoais</TituloContainer>
        <CardGrande 
          imagem={avatar}
          nome="Astrodev" 
          descricao="Oi, eu sou a Ebele. Sou formada em Odontologia com Especialização, Mestrado e Doutorado em Reabilitação Oral. Atualmente sou aluna de Web Full Stack na Labenu."
        />
       
           <ImagemButton  
          imagem={seta}
          texto="Ver mais"
        />
      </SectionsCardGrande>

      <div className="page-section-container-pequeno">
        <CardPequeno 
          imagem={mail}
          nome="Email:"
          descricao="email.fake@labenu.com"
        />
      </div>

      <div className="page-section-container-pequeno">
        <CardPequeno 
          imagem={endereco}
          nome="Endereço:" 
          descricao="Rua da Simpatia, n. 100"
        />
      </div>
      {/* <div className="page-section-container"> */}
      <SectionsCardGrande className="page-section-container">
        <h2>Experiências profissionais</h2>
       
         <CardGrande 
          imagem={odonto}
          nome="Odontologia" 
          descricao="Atendimentos clínicos." 
        />
        
        
        <CardGrande 
          imagem={aula}
          nome="Docência" 
          descricao="Aulas de Radiologia Odontológica em curso técnico de Radiologia." 
        />
      </SectionsCardGrande>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    {/* //</div> */}
    </Container>
  );
}

export default App;
