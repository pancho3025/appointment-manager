import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect,useState } from "react";
export default function MisCitas({citasArray, eliminarCita}) {
  const abrirCerrar = () => {
    const cont = document.querySelector(".seccion-citas-container");
    const boton = document.querySelector(".boton-citas");
    cont.classList.toggle("cerrada");
    if (cont.classList.contains("cerrada")) {
      cont.style.animation = "izq-to-der .33s ease-in forwards";
      boton.innerHTML =
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="cita-container-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>';
    }
    if (!cont.classList.contains("cerrada")) {
      cont.style.animation = "mover .33s ease-in forwards";
      boton.innerHTML =
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="cita-container-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>';
    }
  };

  let misCitas = JSON.parse(localStorage.getItem('citas'))
  if(!misCitas){
    misCitas = []
  }

  
  
 
 

  useEffect(()=>{
    citasSidebar()
    

    let misCitas = JSON.parse(localStorage.getItem('citas'))
    if(misCitas){
      localStorage.setItem('citas',JSON.stringify(citasArray))
    } else {
      localStorage.setItem('citas',JSON.stringify([]))
    }
    citasArray.length<=0 
    ? setTituloCitas('Aun no creaste ninguna cita')
    : setTituloCitas('Mis Citas')

  },[citasArray])

  const [tituloCitas,setTituloCitas] = useState('')

  
  const citasSidebar =()=>{
    return(
    citasArray.map(cita=>{
      return(
      <div className="cita" key={cita.id}>
        <p className="cita-nombre"><b>Nombre:</b> {cita.nombre}</p>
        <p className="cita-fecha"><b>Fecha:</b> {cita.fecha}</p>
        <p className="cita-hora"><b>Hora:</b> {cita.hora}</p>
        <p className="cita-sintomas"><b>Síntomas:</b> {cita.sintomas}</p>
        <button onClick={()=>{eliminarCita(cita.id)}
        } className="eliminar-tarea">Eliminar Cita</button>
      </div>)
    }))
  }
  return (
    <div className="seccion-citas-container">
      <button
        onClick={() => {
          abrirCerrar();
        }}
        className="boton-citas"
        style={{background: citasArray.length<=0 ? 'rgba(117, 117, 117, 0.7)' :'#7e7e7e'}}
      >
        <AiOutlineArrowRight className="cita-container-icon" />
      </button>
      <div className="citas-container"
        style={{background: citasArray.length<=0 ? 'rgba(117, 117, 117, 0.7)' :'#7e7e7e',cursor: citasArray.length<=0 ? 'not-allowed' :'default'}}
      >
        <h3 className="mis-citas">{tituloCitas}</h3>
        {citasSidebar()}
      </div>
    </div>
  );
}

