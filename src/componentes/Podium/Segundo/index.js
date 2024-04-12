import './Segundo.css'

const Segundo = (props) => {
    return (
        <div className="segundo" >
            
            <h1>{props.nome}</h1>
            <img src="/imagens/segundo.png" alt="imagem de segundo lugar"  />
            <p className='ptsSegundo'>{props.pts}</p>
        </div>
    )
}

export default Segundo