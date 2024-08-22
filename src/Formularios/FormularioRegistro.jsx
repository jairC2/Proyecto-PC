import React, { useState } from "react";
import Login from "./Login";

function FormularioRegistro() {
    const [registrado, setRegistrado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const usuario = event.target.usuario.value;
        const contraseña = event.target.contraseña.value;
        const contraseñaV = event.target.contraseñaV.value;
        const correo = event.target.correo.value;
        const tos = event.target.tos.checked;

        if (!/^u\d{5}$/.test(usuario)) {
            alert('El usuario debe comenzar con "u" seguido de 5 dígitos');
            return;
        }
        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[@$*]).*$/.test(contraseña)) {
            alert("La contraseña debe tener al menos un número, una mayúscula y un carácter especial");
            return;
        }
        if (contraseña !== contraseñaV) {
            alert("Las contraseñas no coinciden");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(correo)) {
            alert("Por favor ingrese un correo válido");
            return;
        }
        if (!tos) {
            alert("Debe aceptar los términos y condiciones del servicio");
            return;
        }
        alert("Bienvenido");
        setRegistrado(true);
    };
        if (registrado) {
            return <Login />;
        }

    return (
        <form onSubmit={handleSubmit}>
            {[
                { label: "Usuario", type: "text", id: "iusuario", name: "usuario", placeholder: "Ingrese Usuario" },
                { label: "Contraseña", type: "password", id: "icontraseña", name: "contraseña", placeholder: "Ingrese Contraseña" },
                { label: "Repita Contraseña", type: "password", id: "icontraseñaV", name: "contraseñaV", placeholder: "Repita Contraseña" },
                { label: "Correo Electrónico", type: "email", id: "icorreo", name: "correo", placeholder: "Ingrese Correo Electrónico" }
            ].map(({ label, ...inputProps }, index) => (
                <div key={index}>   
                    <label htmlFor={inputProps.id}>{label}</label>
                    <input {...inputProps} />
                </div>
            ))}
            <div>
                <input type="checkbox" id="itos" name="tos" />
                <label htmlFor="itos">¿Acepta los términos y condiciones del servicio?</label>
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
}

export default FormularioRegistro;

