import React from "react";
import styled from 'styled-components'

const Titulo= styled.div`
display: flex; 
justify-content: center;
align-items:center;
flex-direction: column;
`



class Etapa1 extends React.Component {
    render() {
        return (
            <Titulo>
               
               <div> 
                 <h3>Etapa 1 - DADOS GERAIS</h3>
                 </div>
                 <div> 
                 <p>1. Qual o seu nome?</p>
                 </div>
                <input/>

                <p>2. Qual sua idade?</p>
                <input/>

                <p>3. Qual seu email?</p>
                <input/>

                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value="Ensino médio incompleto" > Ensino médio incompleto </option>
                    <option value="Ensino médio completo"> Ensino médio completo </option>
                    <option value="Ensino superior incompleto"> Ensino superior incompleto </option>
                    <option value="Ensino superior completo" > Ensino superior completo </option>
                </select>
            </Titulo>
        )
    }
}

export default Etapa1;