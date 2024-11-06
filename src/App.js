import React, { useState, useEffect } from 'react';
import ConsumoAPI from './componentes/consumoAPI';
import EstilosGlobais from './componentes/EstilosGlobais';

const AlunosList = () => {
   const alunos = ConsumoAPI();
   
    return (
        
        <div className='container'>

            <div className='primeiros-tres'>
                {alunos.slice(0, 3).map((aluno, index) => (
                    <div key={aluno.id} className="aluno-primeiros-tres">
                        <h3>{aluno.nome}</h3>
                        <p>{index + 1}°</p>
                        <p><strong>Ponto:</strong> {aluno.ponto}</p>
                    </div>
                ))}
            </div>
            <div className='resto-dos-alunos'>
                {alunos.slice(3).map((aluno, index) => (
                    <div key={aluno.id} className="aluno-resto-dos-alunos">
                        <p>{index + 4}°</p><h3>{aluno.nome} </h3> <p><strong>Ponto:</strong> {aluno.ponto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlunosList;
