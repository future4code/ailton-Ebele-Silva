import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components'



function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img className="imagem" src={ props.imagem } />
            <div>
                <span><strong>{ props.nome }</strong> { props.descricao }</span>
            </div>
        </div>
    )
}

export default CardPequeno;