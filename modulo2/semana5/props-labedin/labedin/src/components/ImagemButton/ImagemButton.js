import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components'

const BotaoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: red;
`;

const ImagemBotaoContainer = styled.div`
    width: 30px;
    margin-right: 10px;
`;
function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;