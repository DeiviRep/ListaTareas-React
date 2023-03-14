import React from "react";
import '../style/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai" ;   

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'contenedor completada' : 'contenedor'}>
            <div 
            className="texto"
            onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div 
            className="iconos"
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="icono"/>
            </div>
        </div>
    );
}
export default Tarea;