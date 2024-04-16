import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Jogadores.css'

const Jogadores = ({ nome, ponto, indice, aoDeletar, aoEditar }) => {


    return (
        <section>
            <div className='infoJogador' >
                <p className='indice'>{indice + 4}°</p>
                <p className='nomeJogador'>{nome}</p> <p className='ptsJogador'>{ponto}</p>
                <RiDeleteBin2Fill size={25} onClick={aoDeletar} /> <FaPen onClick={aoEditar} />
            </div>

        </section>
    )
}

export default Jogadores