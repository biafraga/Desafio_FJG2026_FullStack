import React from 'react';
import './Footer.css';
import logoPrefeitura from '../assets/imagens/logo-prefeitura-fjg.png';

export default function Footer(){
    return(
        <footer className="footer-container">
            
            <div className="footer-conteudo-superior">
                
                <div className="footer-esquerda">
                    <img src={logoPrefeitura} alt="Logo Prefeitura do Rio" className="footer-logo" />
                    <p className="texto-endereco">
                        Prefeitura da Cidade do Rio de Janeiro Sede: Rua <br />
                        Afonso Cavalcanti, 455 - Cidade Nova - 20211-110
                    </p>
                </div>

                <div className="footer-direita">
                    <h2 className="footer-titulo">
                        AMPLIE O SEU <strong>REPERTÓ<span className="cor-azul">RIO</span>.</strong>
                    </h2>

                    <div className="footer-links">
                        <div className="coluna-link">
                            <h3>Prefeitura</h3>
                            <ul>
                                <li><a href='#'>Prefeitura.rio</a></li>
                                <li><a href='#'>Carioca Digital</a></li>
                                <li><a href='#'>1746</a></li>
                                <li><a href='#'>Portal da Transparência</a></li>
                            </ul>
                        </div>

                        <div className="coluna-link">
                            <h3>Redes Sociais FJG</h3>
                            <ul>
                                <li><a href='#'>Linkedin</a></li>
                                <li><a href='#'>Instagram</a></li>
                            </ul>
                        </div>

                        <div className="coluna-link">
                            <h3>Política de Privacidade</h3>
                            <ul>
                                <li><a href='#'>Nossa política</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="footer-contato">
                <p><strong>Email para contato:</strong> contato@fundacaojoaogoulart.com</p>
            </div>

        </footer>
    )
}