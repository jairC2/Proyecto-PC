import "./Formulario.css";

const datosForm = [
  { label: "Nombres:", place: "Ingrese nombre(s)" },
  { label: "Apellidos:", place: "Ingrese apellidos(s)" },
  { label: "Correo Electronico:", place: "Ingrese correo electronico(s)" },
  { label: "telefono:", place: "Ingrese telefono(s)" }
];

const formulario = datosForm.map((elemento, index) => (
  <form className="formularios" key={index}>
    <div>
      <label>
        {elemento.label}
        <input
          required
          type={elemento.type}
          name={elemento.name}
          placeholder={elemento.place}
        ></input>
      </label>
    </div>
  </form>
));

function Formulario() {
  return (
    <section className="form-container" id="formulario">
      <h2 className="consuta">Consulta</h2>
      {formulario}
      <textarea
        className="textArea"
        placeholder="Escriba su consulta..."
      ></textarea>
      <button type="submit">Enviar</button>
    </section>
  );
}

export default Formulario;
