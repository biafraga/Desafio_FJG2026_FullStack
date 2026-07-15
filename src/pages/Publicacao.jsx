import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import publicacoesDados from '../services/dados.json'; 
import CardPublicacao from '../components/CardPublicacao';
import './Publicacao.css';

const publicacaoDestaque = publicacoesDados[0];

const publicacoesRelacionadas = publicacoesDados
    .filter(pub => pub.categoria === publicacaoDestaque.categoria && pub.id !== publicacaoDestaque.id)
    .sort((a, b) => b.ano - a.ano);

const getImagePath = (nomeArquivo) => {
    if (!nomeArquivo) return ''; 
    return new URL(`../assets/imagens/${nomeArquivo}`, import.meta.url).href;
};

export default function Publicacao() {
    return (
        <div className="pagina-container">
            <Header />
            
            <main className="conteudo-principal">
                
                <div className="publicacao-info">
                    <h1 className="titulo-principal">{publicacaoDestaque.titulo}</h1>
                    
                    <div className="meta-dados">
                        <div className="meta-coluna meta-esquerda">
                            <p><strong>Tema:</strong> {publicacaoDestaque.categoria}</p>
                            <p><strong>Tipo:</strong> {publicacaoDestaque.tipo}</p>
                            <p><strong>Órgão:</strong> {publicacaoDestaque.orgao}</p>
                        </div>
                        
                        <div className="meta-coluna meta-direita">
                            <p>Publicado em {publicacaoDestaque.ano}</p>
                            <p>{publicacaoDestaque.acessos} acessos</p>
                            <p>{publicacaoDestaque.downloads} downloads</p>
                        </div>
                    </div>

                    <section className="resumo">
                        <h2>RESUMO</h2>
                        <p>{publicacaoDestaque.resumo}</p>
                    </section>

                    <section className="integrantes">
                        <h2>INTEGRANTES</h2>
                        <ul>
                            {publicacaoDestaque.integrantes.map((integrante, index) => (
                                <li key={index}>{integrante}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="anexos">
                        <h2>ANEXOS</h2>
                        <div className="card-anexo">
                            <div>
                                <p><strong>{publicacaoDestaque.titulo}</strong></p>
                                <span>2.2 MB</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="publicacao-imagem">
                    <img 
                        src={getImagePath(publicacaoDestaque.foto)} 
                        alt={`Capa de ${publicacaoDestaque.titulo}`} 
                        className="imagem-destaque" 
                    />
                    <a 
                        href={publicacaoDestaque.link_documento} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-documento"
                    >
                        VER DOCUMENTO 
                    </a>
                </div>

            </main>

            <section className="secao-relacionadas">
                <div className="relacionadas-container">
                    <h2 className="titulo-relacionadas">| PUBLICAÇÕES RELACIONADAS</h2>
                    
                    <div className="lista-cards">
                        {publicacoesRelacionadas.map((pub) => (
                            <CardPublicacao 
                                key={pub.id} 
                                titulo={pub.titulo}
                                capa={getImagePath(pub.foto)} 
                                onClick={() => console.log('Em breve: atualizar destaque!')}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}