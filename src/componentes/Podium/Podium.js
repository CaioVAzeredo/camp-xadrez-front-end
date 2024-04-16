import './Podium.css'
import Primeiro from './Primeiro'
import Segundo from './Segundo'
import Terceiro from './Terceiro'

const Podium = ({ top3, aoDeletar, aoEditar }) => {

    return (
        <section className='podium' >

            <Segundo nome={top3[1].nome} ponto={top3[1].ponto} aoDeletar={aoDeletar} aoEditar={aoEditar}/>

            <Primeiro nome={top3[0].nome} ponto={top3[0].ponto} aoDeletar={aoDeletar} aoEditar={aoEditar}/>

            <Terceiro nome={top3[2].nome} ponto={top3[2].ponto} aoDeletar={aoDeletar} aoEditar={aoEditar}/>

        </section>
    )
}

export default Podium