import React from 'react'
import '../stylesheets/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div 
        className='tarea-texto'
        onCLick={() => completarTarea(id)}>
        {texto}
        </div>
        <div 
          className='tarea-contenedor-iconos'
          onClick={() => eliminarTarea(id)}>
          <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
    </div>
  );
}

export default Tarea;