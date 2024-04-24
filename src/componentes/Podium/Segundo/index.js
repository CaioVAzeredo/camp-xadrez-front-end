import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Segundo.css'

const Segundo = ({ nome, ponto, aoDeletar, aoEditar, id }) => {
    return (
        <div className="segundo" >

            <h1 className="nomePodium">{nome} <RiDeleteBin2Fill size={25} onClick={()=> aoDeletar(id)} className="delPodium"/> <FaPen className="editPodium" onClick={aoEditar}/></h1>
            <img src="/imagens/segundo.png" alt="imagem de segundo lugar" />
            <p className='ptsSegundo'>{ponto}</p>
        </div>
    )
}

export default Segundo