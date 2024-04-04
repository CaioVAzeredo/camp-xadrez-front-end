import './Terceiro.css'

const Terceiro = (props) => {
    return (
        <div className="terceiro">
            <h1>{props.nome}</h1>
            <img src="/imagens/terceiro.png" alt="imagem de terceiro lugar" />
            <p className='ptsTerceiro'>{props.pts}</p>
        </div>
    )
}

export default Terceiro