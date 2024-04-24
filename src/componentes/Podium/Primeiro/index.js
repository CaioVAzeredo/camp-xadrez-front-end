import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Primeiro.css'
const Primeiro = ({ nome, ponto, aoDeletarTop3, aoEditar,indice }) => {
    const imagemString = 'primeiro'
    return (
        <div className="primeiro">
            <h1 className="nomePodium"> {nome}  <RiDeleteBin2Fill size={25} onClick={() => aoDeletarTop3(indice)} className="delPodium" /> <FaPen size={20} onClick={aoEditar} className="editPodium" /></h1>
            <img src={`/imagens/${imagemString}.png`} alt="imagem de primeiro lugar" />
            <p className='ptsPrimeiro'>{ponto}</p>

        </div>
    )

}

export default Primeiro