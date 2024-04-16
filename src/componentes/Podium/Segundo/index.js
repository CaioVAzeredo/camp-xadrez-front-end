import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Segundo.css'

const Segundo = ({ nome, ponto, aoDeletar, aoEditar }) => {
    return (
        <div className="segundo" >

            <h1>{nome}</h1> <RiDeleteBin2Fill size={25} onClick={aoDeletar} /> <FaPen onClick={aoEditar}/>
            <img src="/imagens/segundo.png" alt="imagem de segundo lugar" />
            <p className='ptsSegundo'>{ponto}</p>
        </div>
    )
}

export default Segundo