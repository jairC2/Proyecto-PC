import { useState } from 'react'

import FormularioRegistro from "./FormularioRegistro";


const usuarios = [
    { nombreUsuario: 'usuario1', contrasena: 'contraseña1' },
    { nombreUsuario: 'usuario2', contrasena: 'contraseña2' },
    { nombreUsuario: 'usuario3', contrasena: 'contraseña3' },
    { nombreUsuario: 'usuario4', contrasena: 'contraseña4' },
    { nombreUsuario: 'usuario5', contrasena: 'contraseña5' }
]
let intento = 0


const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mostrarRegistro, setMostrarRegistro] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        )
        if (usuarioEncontrado) {
            alert(`¡Bienvenido ${usuarioEncontrado.nombreUsuario}`)
        } else {
            intento++
            if (intento < 2) {
                alert('Usuario y/o constraseña incorrectos')
            } else {
                alert('Credenciales incorrectas,por favor pasar a registrarse')
                setMostrarRegistro(true)
            }
        }

    }
    return (
        <div>
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="iusuario">Usuario</label>
                        <input
                            type="texto"
                            id="iusuario"
                            name="nombreUsuario"
                            placeholder="Ingresar nombre usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="ipassword">Contraseña</label>
                        <input
                            type="password"
                            id="ipassword"
                            name="constraseña"
                            placeholder="Ingresar contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}/>
                    </div>
                    <button type="submit">
                        Ingresar
                    </button>
                </form>
            ) : (
                <FormularioRegistro />
            )}
        </div>
    )
}
export default Login;