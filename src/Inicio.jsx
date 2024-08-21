import Logo from "./Logo";
import { useState } from "react";

const infoDia = [
  { dia: "Domingo", textoDia: "Disfruta tus fines de semana con los mejores descuentos" },
  { dia: "Lunes", textoDia: "Innovar es la clave para transformar el futuro." },
  {
    dia: "Martes",
    textoDia: "Un día para perfecto para tunear tu estilo de vida",
  },
  { dia: "Miércoles", textoDia: "La tecnología es mejor cuando une a las personas" },
  { dia: "Jueves", textoDia: "La innovación distingue a los líderes de los seguidores" },
  { dia: "Viernes", textoDia: "La tecnología avanza cuando se exploran los límites de lo posible" },
  { dia: "Sábado", textoDia: "El progreso es el resultado de un cambio constante" },
];

let f = new Date();
let dia = infoDia[f.getDay()];

function Inicio() {
  const [opacity, setOpacity] = useState(1);

  const cambiar = () => {
    setOpacity(0);

    setTimeout(() => {
      setOpacity(1);
    }, 2000);
  };
  return (
    <main className="main-inicio" id="inicio">
      <div
        className="contenido-inicio"
        style={{ opacity: `${opacity}`, transition: "opacity 1s" }}
      >
        <Logo />
        <h2 className="dia">Hoy {dia.dia}</h2>
        <p className="textoDia">{dia.textoDia}</p>
        <a href="#productos" className="button-inicio" type="button" onClick={cambiar}>
          Ir a Productos
        </a>
      </div>
    </main>
  );
}

export default Inicio;
