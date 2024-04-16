import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import './Terceiro.css'

const Terceiro = ({ nome, ponto, aoDeletar, aoEditar }) => {
    return (
        <div className="terceiro">
            <h1>{nome}</h1> <RiDeleteBin2Fill size={25} onClick={aoDeletar} /> <FaPen onClick={aoEditar}/>
            <img src="/imagens/terceiro.png" alt="imagem de terceiro lugar" />
            <p className='ptsTerceiro'>{ponto}</p>
        </div>
    )
}

export default Terceiro