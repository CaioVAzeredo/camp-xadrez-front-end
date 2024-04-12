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
                {props.topRestante.map(aluno => <Jogadores key={aluno.id} nome={aluno.nome} pontos={aluno.ponto} />)}
                <Botao texto={'Atualizar'} />
            </form >
        </div>
    )
}

export default Formulario