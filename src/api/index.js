import { useState, useEffect } from 'react';

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
        useEffect()
    );
};

export default AlunosList;
