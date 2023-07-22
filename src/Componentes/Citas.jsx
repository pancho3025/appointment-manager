import CitasForm from "./CitasForm";
import "../Estilos/Citas.sass";
import MisCitas from "./MisCitas";
import { useState,useEffect } from "react";
export default function Citas() {

  let misCitas = JSON.parse(localStorage.getItem('citas'))
  if(!misCitas){
    misCitas = []
  }

  const [citasArray, setCitasArray] = useState(misCitas);
 

  const crearCita =(cita)=>{  
    setCitasArray([...citasArray,cita])
  }
  const eliminarCita= (id)=>{
    const newCitas = citasArray.filter((cita)=>cita.id !== id)
    
    setCitasArray(newCitas)
  }
  return (
    <section id="citas" className="citas">
      <CitasForm  crearCita={crearCita}/>
      <MisCitas citasArray={citasArray} eliminarCita={eliminarCita}/>
    </section>
  );
}

// cita = {
//   nombreyapellido: 'francisco',
//   fecha: '12/05/04',
//   hora: '12:49PM',
//   sintomas: 'caca'

// }

// citas = [
//   {
//   },{
//   },
//   {
//   },
// ]
