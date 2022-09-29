import React from 'react'

const Gasto = ({gasto}) => {

    const {nombre , cantidad} = gasto
    
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{cantidad}</p>
                <p className='nombre-gasto'>{nombre}</p>
            </div>
        </div>
    </div>
  )
}

export default Gasto