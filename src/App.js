import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ... (other components imports)

const Api = () => {
    const [alunos, setAlunos] = useState([]); // State to store API data

    useEffect(() => {
        // Fetch data from the API on component mount
        const fetchData = async () => {
            try {
                const resposta = await axios.get('http://localhost:3333/alunos');
                setAlunos(resposta.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Lista de Alunos</h1>
            {alunos.length > 0 ? (
                <ul>
                    {alunos.map((aluno) => (
                        <li key={aluno.id}>
                            {aluno.id} - {aluno.nome} - Pontos: {aluno.ponto}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Não tem informações</p>
            )}
        </div>
    );
};

export default Api;