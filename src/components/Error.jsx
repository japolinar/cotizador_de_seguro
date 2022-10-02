import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Error = () => {
    const {error} = useCotizador()
  return (
    <div className=' border border-red-400 text-red-700 bg-red-100 uppercase text-center rounded-md py-3'>
      <p>{error}</p>
    </div>
  )
}

export default Error
