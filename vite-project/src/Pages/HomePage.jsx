import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 relative">
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0">
        <img className="w-44" src="./src/assets/newLogo.png" alt="Logo Empresa" />
      </header>

      <main className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-semibold text-gray-800 my-5">
          ¡Tu salud está garantizada!
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 mb-10">
          Inicia sesión o regístrate para acceder a tu historial de consultas.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <Link to="Register" className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300">
              Registrarse
            </Link>
            <Link to="Login" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300">
              Iniciar sesión
            </Link>
          </div>
          <Link to="Info" className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-3 px-6 shadow-md transition duration-300">
            ¿Qué estás buscando?
          </Link>
        </div>
      </main>
    </div>
  );
}
