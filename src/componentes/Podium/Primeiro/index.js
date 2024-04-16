import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Primeiro.css'
const Primeiro = ({ nome, ponto, aoDeletar, aoEditar }) => {
    const imagemString = 'primeiro'
    return (
        <div className="primeiro">
            <h1> {nome} </h1> <RiDeleteBin2Fill size={25} onClick={aoDeletar} /> <FaPen onClick={aoEditar} />
            <img src={`/imagens/${imagemString}.png`} alt="imagem de primeiro lugar" />
            <p className='ptsPrimeiro'>{ponto}</p>

        </div>
    )

}

export default Primeiro