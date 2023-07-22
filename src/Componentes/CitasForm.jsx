import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function CitasForm({ crearCita }) {
  const [cita, actualizarCita] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [campos, setCamposObligatorios] = useState(false)

  const nuevaDataCita = (e) => {
    const { name, value } = e.target;
    actualizarCita({
      ...cita,
      [name]: value,
    });
  };

  const enviarForm = (e) => {
    e.preventDefault();

    const { nombre, fecha, hora, sintomas } = cita;
    if (
      nombre.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setCamposObligatorios(true)
      return;
    }
    setCamposObligatorios(false)
    cita.id = uuidv4();
    crearCita(cita);

    actualizarCita({
      nombre: '',
      fecha: '',
      hora: '',
      sintomas:''
    })
  };

  const crearCamposWarning =()=>{
    if(campos===true){
      return <p className="warning">Debes llenar todos los campos</p>
    }else{
      return
    }
  
}

  return (
    <div>
      <h1 className="citas-title">Crea una cita</h1>
      {crearCamposWarning()}
      <form onSubmit={enviarForm} className="citas-form">
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          onChange={nuevaDataCita}
          id="name"
          className="inputs"
          name="nombre"
          type="text"
          placeholder="Coloca tu nombre y apellido"
          value={cita.nombre}
        ></input>
        <label htmlFor="date">Fecha</label>
        <input
          onChange={nuevaDataCita}
          id="date"
          className="inputs"
          name="fecha"
          type="date"
          value={cita.fecha}
        ></input>
        <label htmlFor="time">Hora</label>
        <input
          onChange={nuevaDataCita}
          id="time"
          className="inputs"
          name="hora"
          type="time"
          value={cita.hora}
        ></input>
        <label htmlFor="sintomas">Síntomas</label>
        <textarea
          onChange={nuevaDataCita}
          id="sintomas"
          className="inputs"
          name="sintomas"
          type="text"
          value={cita.sintomas}
        ></textarea>
        <input
          value="Agregar Cita"
          className="enviar-cita"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default CitasForm;
