import { useState } from "react";
import Productos from "./Productos";
import Logo from "./Logo";
import Cuerpo from "./Cuerpo";
import { IoSearchCircleSharp } from "react-icons/io5";

function Header() {
  const [buscar, setBuscar] = useState("");

  const filtrarProductos = Productos.filter((x) =>
    x.categoria.toLowerCase().includes(buscar.toLowerCase())
  );

  const filtrado = (e) => setBuscar(e.target.value);

  return (
    <>
      <header className="header" id="productos">
        <Logo />
        <div className="container-busqueda">
          <input
            className="inputBuscar"
            type="text"
            placeholder="Buscar..."
            value={buscar}
            onChange={filtrado}
          />
          <IoSearchCircleSharp className="icon-lupa" />
        </div>
      </header>
      <>
        <Cuerpo props={filtrarProductos} />
      </>
    </>
  );
}

export default Header;
//holaaaaaa