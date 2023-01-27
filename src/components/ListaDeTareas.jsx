import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../stylesheets/ListaDeTareas.css';

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea => {
        console.log("tarea agg");
        console.log(tarea);
    }


  return (
    <>
     <TareaFormulario />
     <div className='tareas-lista-contenedor'>
    {
        tareas.map((tarea) =>
        <Tarea 
        texto={tarea.texto}
        completada={tarea.completada}
        />
        )
    }
     </div>
    </>
  )
}

export default ListaDeTareas