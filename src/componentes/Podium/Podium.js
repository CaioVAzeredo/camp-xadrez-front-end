import './Podium.css'
import Primeiro from './Primeiro'
import Segundo from './Segundo'
import Terceiro from './Terceiro'

const Podium = (props) => {

    const primeiro = props.data[0].nome
    const ptsPrimeiro = props.data[0].ponto

    const segundo = props.data[1].nome
    const ptsSegundo = props.data[1].ponto

    const terceiro = props.data[2].nome
    const ptsTerceiro = props.data[2].ponto

    return (
        <section className='podium' >

            <Segundo nome={segundo} pts={ptsSegundo} />

            <Primeiro nome={primeiro} pts={ptsPrimeiro} />

            <Terceiro nome={terceiro} pts={ptsTerceiro} />


        </section>
    )
}

export default Podium