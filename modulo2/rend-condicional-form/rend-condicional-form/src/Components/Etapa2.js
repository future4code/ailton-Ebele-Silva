
import styled from "styled-components";
import React from "react";

const Titulo= styled.div`
display: flex; 
justify-content: center;
align-items:center;
flex-direction: column;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <Titulo>

                <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p> 5. Qual curso?</p>
                <input  />
                <p> 6. Qual a unidade de ensino?</p>
                <input  />


            </Titulo>
        )
    }
}



export default Etapa2;
