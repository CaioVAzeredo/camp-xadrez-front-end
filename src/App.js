import React, { useState } from 'react';
import styled from 'styled-components';
const ContainerMain = styled.main`
width: 100vw;
height: 100vh;

margin: 0px;

`
const ContainerSection = styled.section`
margin: 0 auto;
  @media (max-width: 640px) {
.img2, .img3, .img1{
        display: none;
    }
div{

}
img{
width: 100px;
}
  }
`;

const ContainerAlunos = styled.section`
margin: 0 auto;
`;

const AlunosList = () => {
    const [alunos] = useState([
        { nome: "Rafael", pontos: 89 },
        { nome: "João", pontos: 85 },
        { nome: "Maria", pontos: 92 },
        { nome: "Carlos", pontos: 78 },
        { nome: "Ana", pontos: 95 },
        { nome: "Pedro", pontos: 88 },
        { nome: "Lucas", pontos: 82 },
        { nome: "Clara", pontos: 87 },
        { nome: "Gustavo", pontos: 93 },
        { nome: "Beatriz", pontos: 80 },
    ]);

    const podium = alunos.slice(0, 3);
    return (
        <ContainerMain>
            <ContainerSection>
                <div>
                    <img src='imagens/2.png' className='img2' alt="2º Lugar" />
                    <img src='imagens/2-mobile.png' className='mobile2' alt="2º Lugar Mobile" />
                    <h1>Nome: {podium[1].nome}</h1>
                    <p>Ponto: {podium[1].pontos}</p>
                </div>
                <div>
                    <img src='imagens/1.png' className='img1' alt="1º Lugar" />
                    <img src='imagens/1-mobile.png' className='mobile1' alt="1º Lugar Mobile" />
                    <h1>Nome: {podium[0].nome}</h1>
                    <p>Ponto: {podium[0].pontos}</p>
                </div>
                <div>
                    <img src='imagens/3.png' className='img3' alt="3º Lugar" />
                    <img src='imagens/3-mobile.png' className='mobile3' alt="3º Lugar Mobile" />
                    <h1>Nome: {podium[2].nome}</h1>
                    <p>Ponto: {podium[2].pontos}</p>
                </div>
            </ContainerSection>

            <ContainerAlunos>
                <h1>Alunos</h1>
                {alunos.slice(3).map((aluno, index) => (
                    <div key={index}>
                        <h2>{index + 4}° - Nome: {aluno.nome}</h2>
                        <p>Pontos: {aluno.pontos}</p>
                    </div>
                ))}
            </ContainerAlunos>
        </ContainerMain>
    );
};

export default AlunosList;
