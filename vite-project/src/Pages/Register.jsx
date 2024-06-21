import { Link } from "react-router-dom";

export function Register() {
  return (
    <>
      <div className="w-100% h-screen relative flex items-center justify-center">
        <div
          style={{ backgroundColor: "#EEF2F5" }}
          className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
        >
          <img
            className="w-[170px]  "
            src="./src/assets/newLogo.png"
            alt="LogoEmpresa"
          />

          <Link to="/" className="text-white bg-black p-3 rounded">
          Regresar
          </Link>


        </div>
        <div className=" w-[500px] h-[500px] border">
          <img className="w-[500px] h-[495px]"  src="./src/assets/pills.png" alt="Imagen" />
        </div>
        <div className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
          <h1 className="text-3xl font-medium">Registrate</h1>
          <br />
          <input
            className="border p-2"
            type="text"
            placeholder="Nombre Completo"
            required
          />
          <br />
          <input
            className="border p-2"
            type="email"
            placeholder="Correo"
            required
          />
          <br />
          <input
            className="border p-2"
            type="password"
            placeholder="Contraseña"
            required
          />
          <br />
          <input
            className="border p-2"
            type="date"
            placeholder="Fecha de nacimiento"
            required
          />
          <br />
          <input
            className="border p-2"
            type="tel"
            placeholder="Número telefónico"
            required
          />
          <br />
          <div className="p-4 flex justify-between">
            <button
              style={{ backgroundColor: "#00D45C" }}
              className="text-white w-[110px] h-[50px] rounded-lg"
            >
              Registrarse
            </button>
            <button
              style={{ backgroundColor: "#0366FF" }}
              className="text-white w-[110px] h-[50px] rounded-lg"
            >
              Iniciar sesion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
