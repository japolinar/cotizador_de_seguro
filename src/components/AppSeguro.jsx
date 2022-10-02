import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'
import Resultado from './Resultado'

const AppSeguro = () => {
 
  const {resultado, cargando} = useCotizador()

  return (
    <>   
      <header className="my-10">
        <h1 className=" text-white text-center text-4xl font-black">
          Cotizador de Seguros de Auto
        </h1>          
      </header>

      <div className=' text-center my-6'>
        <a className='bg-indigo-400 hover:bg-white hover:text-indigo-400 rounded-lg p-3  text-white font-bold uppercase cursor-pointer'
          href="/"
        >
          Reiniciar
        </a>
      </div>

      <main className=" bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario></Formulario>

        {cargando ? <Spinner></Spinner>: <Resultado></Resultado>}    
      </main> 
       
    </>
  )
}

export default AppSeguro
