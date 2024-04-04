import './Primeiro.css'
const Primeiro = (props) => {
    return (
        <div className="primeiro">
            <h1> {props.nome} </h1>
            <img src="/imagens/primeiro.png" alt="imagem de primeiro lugar" />
            <p className='ptsPrimeiro'>{props.pts}</p>
            
        </div>
    )

}

export default Primeiro