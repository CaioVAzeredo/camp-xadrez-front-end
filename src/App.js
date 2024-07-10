import React, { useState, useEffect } from 'react';

const AlunosList = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await fetch('http://18.231.177.78:3333/alunos/');
        const dados = await response.json();
        setAlunos(dados);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchAlunos();
  }, []); 

  return (
    <div className='container'>
      <h1>Lista de Alunos</h1>
      <div>
        {alunos.map(aluno => (
          <div key={aluno.id} className="aluno">
            <h3>{aluno.nome}</h3>
            <p><strong>Ponto:</strong> {aluno.ponto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlunosList;
