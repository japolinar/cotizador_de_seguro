import React, { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {

  const {datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(Object.values(datos).includes('')){
        setError('Todos los Campos Obligatorios')
        return
    }

    setError('')
    
    cotizarSeguro()
  }

  return (
    <>
      {error && <Error></Error>}
      <form onSubmit={handleSubmit}>
          <div className=' my-5'>
              <label className=' block mb-3 font-bold text-gray-400 uppercase'>
                  Marca
              </label>

              <select 
                name="marca" 
                className=' w-full p-3 bg-white border border-gray-200'
                onChange={(e)=> handleChangeDatos(e)}
                value={datos.marca}
              >
                  <option>--Seleccione Marca--</option>
                  {MARCAS.map((marca)=>(
                        <option key={marca.id} value={marca.id} >
                            {marca.nombre}
                        </option>
                    ))}
              </select>
          </div>

          <div className=' my-5'>
              <label className=' block mb-3 font-bold text-gray-400 uppercase'>
                  Año
              </label>

              <select 
                name="year" 
                className=' w-full p-3 bg-white border border-gray-200'
                onChange={(e)=> handleChangeDatos(e)}
                value={datos.year}
              >
                  <option >--Seleccione el Año--</option>

                  {YEARS.map((year)=>(
                        <option key={year} value={year} >
                            {year}
                        </option>
                    ))}
              </select>
          </div>

          <div className=' my-5'>
              <label className=' block mb-3 font-bold text-gray-400 uppercase' >
                  Planes
              </label>

              <div className=' flex gap-3 items-center'>
                {PLANES.map((plan)=>(
                    <Fragment key={plan.id} >
                        <label>
                            {plan.nombre}
                        </label>
                        <input 
                            type="radio" 
                            name="plan" 
                            value={plan.id}
                            onChange={(e)=> handleChangeDatos(e)}
                        />
                    </Fragment>                        
                    ))}
              </div>
          </div>
          <input type="submit" 
            value="Cotizar"
            className=' w-full bg-indigo-400 hover:bg-indigo-600 rounded-lg p-3 text-white font-bold uppercase cursor-pointer' 
          />
      </form>
    </>
  )
}

export default Formulario

