import React from 'react';
import './Header.css';
import logoPrefeitura from '../assets/imagens/logo-prefeitura.png';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logoPrefeitura} alt="Logo Prefeitura do Rio" className="header-logo" />
      
      <button className="btn-publicar" type="button">
        PUBLICAR
      </button>
    </header>
  );
}

export default Header;