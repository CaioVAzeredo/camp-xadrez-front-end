import './Jogadores.css'

const Jogadores = (props) => {

    
    return (
        <section>
            <div className='infoJogador' >
                <p className='nomeJogador'>{props.nome}</p> <p className='ptsJogador'>{props.pontos}</p>
            </div>

        </section>
    )
}

export default Jogadores