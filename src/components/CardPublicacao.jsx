import React from 'react';
import './CardPublicacao.css';

export default function CardPublicacao({capa, titulo, onClick}){
    return(
        <div className="card-container" onClick={onClick}>
            <img src={capa} alt={`Capa de ${titulo}`} className="card-imagem" />
            <p className="card-titulo">{titulo}</p>
        </div>
    );
}