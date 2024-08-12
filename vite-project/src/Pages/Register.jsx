import { Link } from "react-router-dom";
import logo from "../assets/newLogo.png"; // Ajusta la ruta según la estructura de tu proyecto
import pillsImage from "../assets/pills.png"; // Ajusta la ruta según la estructura de tu proyecto

export function Register() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Encabezado con logo y botón de regresar */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0">
        <div>
          <img className="w-44" src={logo} alt="Logo Empresa" />
        </div>
        <div>
          <Link
            to="/"
            className="text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Regresar
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col md:flex-row justify-center items-center mt-24">
        {/* Imagen a la izquierda */}
        <div className="w-0 md:w-1/2 md:mb-5 flex justify-center items-center">
          <img
            className="w-full md:w-auto md:h-full object-cover rounded-lg shadow-lg"
            src={pillsImage}
            alt="Pills"
          />
        </div>
        {/* Formulario a la derecha */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-medium mb-4 text-center">Regístrate</h1>
          <form className="flex flex-col gap-4">
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Nombre Completo"
              required
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Correo Electrónico"
              required
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Contraseña"
              required
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              placeholder="Fecha de Nacimiento"
              required
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              placeholder="Número Telefónico"
              required
            />
            <p className="text-center text-gray-600 mb-4">
              ¿Tienes cuenta? <Link to="/Login" className="text-blue-500 hover:underline">Inicia sesión</Link>
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                type="submit"
              >
                Registrarse
              </button>
              <Link
                to="/Login"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-600 transition duration-300"
              >
                Iniciar sesión
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
