import React, {useState, createContext}  from 'react'
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from '../helpers'

const CotizadorContext = createContext();

const CotizadorProvider = ({children})=>{
    
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });    

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

   const handleChangeDatos = (e)=>{
       //console.log(e.target.name)
       //console.log(e.target.value)
       setDatos({
           ...datos,
           [e.target.name]: e.target.value
       })
   }

   const cotizarSeguro = ()=>{
       //console.log('cotizando....')
       //Una Base
       let resultado = 2000

       //Obtener Diferencia de año
        const diferencia = obtenerDiferenciaYear(datos.year)
        //console.log(diferencia)

       //hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        //console.log(resultado)

       //Europeo incrementa el 30%
       //Americano incrementa el 15%       
       //Asiatico incrementa el 5%
       resultado *= calcularMarca(datos.marca)
       //console.log(resultado)

       //Basico incrementa el 20%
       //Completo incrementa el 50%
        resultado *= calcularPlan(datos.plan)
        //console.log(resultado)

        //Formatear Dinero
        resultado = formatearDinero(resultado)
        //console.log(resultado)

        setCargando(true) //Cargando el Spinner

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false) //Cerrando el Spinner
        }, 1500);

   }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }} 
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext
