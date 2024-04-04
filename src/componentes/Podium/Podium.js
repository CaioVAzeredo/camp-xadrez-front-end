import './Podium.css'
import Primeiro from './Primeiro'
import Segundo from './Segundo'
import Terceiro from './Terceiro'

const Podium = () => {
    
    const primeiro = 'Caio'
    const ptsPrimeiro = 30
    const segundo = 'Pedro'
    const ptsSegundo = 25
    const terceiro = 'Joao'
    const ptsTerceiro = 20

    return (
        <section className='podium'>

            <Segundo nome={segundo} pts={ptsSegundo} />

            <Primeiro nome={primeiro} pts={ptsPrimeiro} />

            <Terceiro nome={terceiro} pts={ptsTerceiro} />


        </section>
    )
}

export default Podium