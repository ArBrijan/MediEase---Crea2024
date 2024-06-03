export function Login() {
  return (
    <>
      <div className="w-screen h-screen relative flex items-center justify-center">
        <div
          style={{ backgroundColor: "#EEF2F5" }}
          className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
        >
          <img
            className="w-[170px]  "
            src="./src/assets/newLogo.png"
            alt="LogoEmpresa"
          />

          <a
            style={{ backgroundColor: "#1E1E1E" }}
            className="text-white left-[670%] top-[15%] p-[15px] rounded-lg"
            href="/Home"
          >
            Regresar
          </a>
        </div>
        <div className=" w-[500px] h-[500px] border">
          <img
            className="w-[500px] h-[495px]" src="./src/assets/pills.png" alt="Imagen"
          />
        </div>
        <div className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
          <h1 className="text-3xl font-medium">Inicia sesión</h1>
          <br />
          <input
            className="border p-2"
            type="text"
            placeholder="Correo"
            required
          />
          <br />
          <input
            className="border p-2"
            type="text"
            placeholder="Contraseña"
            required
          />
          <br />
          <label htmlFor="">
            <a href="/Register">¿No tienes una cuenta?</a>
          </label>
          <br />
          <br />
          <button
            style={{ backgroundColor: "#00D45C" }}
            className="text-white w-[100px] h-[50px] absolute righ-[65%] top-[63%]  rounded-lg "
          >
            <a href="/registrer">Registrarse</a>
          </button>
          <button
            style={{ backgroundColor: "#0366FF" }}
            className="text-white w-[110px] h-[50px] absolute left-[65%] top-[63%] rounded-lg"
          >
            Iniciar sesion
          </button>
        </div>
      </div>
    </>
  );
}
