import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Terceiro.css'

const Terceiro = ({ nome, ponto, aoDeletar, aoEditar, id }) => {
    return (
        <div className="terceiro">
            <h1 className="nomePodium">{nome} <RiDeleteBin2Fill size={25} onClick={() => aoDeletar(id)} className="delPodium" /> <FaPen className="editPodium" onClick={aoEditar} /></h1>
            <img src="/imagens/terceiro.png" alt="imagem de terceiro lugar" />
            <p className='ptsTerceiro'>{ponto}</p>
        </div>
    )
}

export default Terceiro