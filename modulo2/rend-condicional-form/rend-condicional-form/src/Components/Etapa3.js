

import styled from "styled-components";
import React from "react";

const Titulo = styled.div`
display: flex; 
justify-content: center;
align-items:center;
flex-direction: column;
`


class Etapa3 extends React.Component {
    render() {
        return (
            <Titulo>

                <h3>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

                <p>5. Por que você naõ terminou um curso de graduação?</p>
                <input />


                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum" > Nenhum </option>
                    <option value="Curso técnico"> Curso técnico </option>
                    <option value="Curso de inglês"> Curso de inglês </option>
                </select>


            </Titulo>
        )
    }
}


export default Etapa3;
