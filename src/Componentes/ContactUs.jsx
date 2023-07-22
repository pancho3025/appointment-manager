import "../Estilos/ContactUs.sass";
import { useState } from "react";
import { FaMapMarkerAlt, FaTwitter, FaPhone } from "react-icons/fa";
export default function ContactUs() {

  const [datosForm, actualizarDatosForm] = useState({
    nombreContact: "",
    emailContact: "",
    asuntoContact: "",
    textoContact: "",
  });

  const [campos, setCampos] = useState(false)
  const nuevaDataForm = (e) => {
    const { name, value } = e.target;
    actualizarDatosForm({
      ...datosForm,
      [name]: value,
    });
  };
  

  const ponteContacto=(e)=>{
    e.preventDefault()

    const { nombreContact, emailContact, asuntoContact, textoContact } = datosForm;
    if (
      nombreContact.trim() === "" ||
      emailContact.trim() === "" ||
      asuntoContact.trim() === "" ||
      textoContact.trim() === ""
    ) {
      setCampos(true)
      return;
    }
    setCampos(false)
    actualizarDatosForm({
      nombreContact: '',
      emailContact: '',
      asuntoContact: '',
      textoContact:''
    })
  }

  const warning =()=>{
    if(campos===true){
      return <p className="warning-form">Debes llenar todos los campos</p>
    }else{
      return
    }
  
}
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="form-container">
          <h3 className="form-title">Ponte en contacto</h3>
          {warning()}
          <form id="contactar" onSubmit={(e)=>{
                ponteContacto(e)
              }}>
            <div className="name-email">
              <input onChange={nuevaDataForm} name="nombreContact" className="name" value={datosForm.nombreContact} type="text" placeholder="Nombre"></input>
              <input onChange={nuevaDataForm} name="emailContact" className="email" value={datosForm.emailContact} type="email" placeholder="Email"></input>
            </div>
            <input onChange={nuevaDataForm} name="asuntoContact" className="subject" value={datosForm.asuntoContact} type="text" placeholder="Asunto"></input>
            <textarea onChange={nuevaDataForm} name="textoContact" className="texto" value={datosForm.textoContact} placeholder=". . ."></textarea>
            <input
              
              className="enviar"
              type="submit"
              value="Enviar"
            ></input>
          </form>
        </div>
        <div className="side-contact">
          <h2 className="side-title">Tambien puedes contactarnos mediante:</h2>
          <div className="more-contact">
            <div className="contact-item">
              <h4 className="item-title">
                <div className="icon-circle1"></div>
                <FaPhone className="icons" />
                Teléfono
              </h4>

              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href=""
                className="item-link"
              >
                + 1227 7733 7562
              </a>
            </div>
            <div className="contact-item">
              <h4 className="item-title">
                <div className="icon-circle2"></div>
                <FaTwitter className="icons" />
                Twitter
              </h4>

              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href=""
                className="item-link"
              >
                @appointmentmanager
              </a>
            </div>
            <div className="contact-item">
              <h4 className="item-title">
                <div className="icon-circle3"></div>
                <FaMapMarkerAlt className="icons" />
                Dirección
              </h4>

              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href=""
                className="item-link dire"
              >
                General Manuel Belgrano 899, Córdoba, Argentina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

