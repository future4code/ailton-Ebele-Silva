

import styled from "styled-components";
import React from "react";

const Titulo= styled.div`
display: flex; 
justify-content: center;
align-items:center;
flex-direction: column;
`

class Final extends React.Component {
    render() {
        return (
            <Titulo>
                <h2> O FORMULÁRIO ACABOU! </h2>
                <p> Muito obrigado por participar! Entraremos em contato!</p>
            </Titulo>
        )
    }
}


export default Final;
