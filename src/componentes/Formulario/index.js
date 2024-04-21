import Jogadores from '../Jogadores'
import Podium from '../Podium/Podium'
import './Formulario.css'


const Formulario = ({ top3, topRestante, aoDeletar, aoEditar }) => {

    return (
        <div className='formulario'>
            < form className='form'>
                <Podium top3={top3} aoDeletar={aoDeletar} aoEditar={aoEditar} />
                <h2 > JOGADORES </h2>
                <div className='divJogadores'>
                    {topRestante.map((aluno, i) => <Jogadores key={aluno.id} nome={aluno.nome} ponto={aluno.ponto} indice={i} aoDeletar={aoDeletar} aoEditar={aoEditar} />)}
                </div>
            </form >
        </div>
    )
}

export default Formulario