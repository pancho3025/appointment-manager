import BotonNav from "./BotonNav";
import "../Estilos/BotonesNav.sass";
import "../Estilos/Nav.sass";
import { FaAtlassian } from "react-icons/fa";
import "../Estilos/Hambur.sass";

function Nav() {
  const holaPapu = () => {
    let linea = document.querySelectorAll(".linea"),
      menu = document.querySelector(".menu");
    document.querySelector(".nav").classList.toggle("hola");
    menu.classList.toggle("abrir");
    linea.forEach((L) => {
      L.classList.toggle("active");
    });
  };
  return (
    <div className="nav">
      <div className="media">
        <div className="page-name">
          <a className="bordaso" href={"#"}>
            <FaAtlassian className="casa" /> ppointment Manager
          </a>
          <a className="ola" href={"#"}>
            <FaAtlassian className="casa" /> ppointment Manager
          </a>
        </div>
        <div className="botones">
          <BotonNav text={"Citas"} href={"#citas"} />
          <BotonNav text={"Sobre Nosotros"} href={"#about-us"} />
          <BotonNav text={"Contáctanos"} href={"#contact"} />
        </div>
      </div>
      <div className="menu" onClick={() => {holaPapu()}}>
        <div className="linea active linea-uno"></div>
        <div className="linea active linea-dos"></div>
        <div className="linea active linea-tres"></div>
      </div>
    </div>
  );
}

export default Nav;
