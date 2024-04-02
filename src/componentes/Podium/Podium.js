import './Podium.css'
import Primeiro from './Primeiro'
import Segundo from './Segundo'
import Terceiro from './Terceiro'

const Podium = () => {
    return (
        <section className='podium'>
            
            <Segundo />
          
            <Primeiro />
           
            <Terceiro />
            
        </section>
    )
}

export default Podium