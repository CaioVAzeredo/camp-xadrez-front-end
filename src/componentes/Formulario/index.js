import Botao from '../Botao'
import Jogadores from '../Jogadores'
import Podium from '../Podium/Podium'
import './Formulario.css'


const Formulario = (props) => {
    const aoSalvar = (e) => {
        e.preventDefault()
        console.log('atualizado')
    }


    return (
        <div className='formulario'>
            < form onSubmit={aoSalvar} className='form'>
                <Podium data={props.podium} />
                <h2> JOGADORES </h2>
                <div className='divJogadores'>
                    {props.topRestante.map((aluno, i) => <Jogadores key={aluno.id} nome={aluno.nome} pontos={aluno.ponto} indice={i}/>)}
                </div>
                <Botao texto={'Atualizar'} />
            </form >
        </div>
    )
}

export default Formulario