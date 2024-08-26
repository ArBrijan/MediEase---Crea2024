import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      console.log("Respuesta del servidor:", response.data);

      // Guardar el userId en el local storage si el login fue exitoso
      if (response.data.message === "Success") {
        localStorage.setItem("userId", response.data.userId);
        console.log("userId guardado en local storage:", response.data.userId);
        navigate("/UserPage");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error("Error en el inicio de sesión:", err);
      alert("Error en el inicio de sesión");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-5 bg-white shadow-md">
        <img
          className="w-40"
          src="./src/assets/newLogo2.png"
          alt="LogoEmpresa"
        />
        <Link to="/" className="text-white  bg-black rounded-lg p-3 w-[130px] text-center">
          Regresar
        </Link>
      </div>

      <main className="flex flex-col md:flex-row justify-center items-center mt-24">
        {/* Imagen a la izquierda */}
        <div className="hidden md:flex md:w-1/2 md:mb-5 justify-center items-center">
          <img
            className="w-[500px] h-[495px] rounded-xl shadow-lg"
            src="./src/assets/pills.png"
            alt="Imagen"
          />
        </div>
        <div className="bg-white shadow-xl rounded-lg p-10 flex flex-col w-[350px] md:w-[500px]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-black mb-8 text-center">
              Inicia sesión
            </h1>
            <input
              className="border border-gray-300 rounded-lg p-3 mb-8 focus:outline-none"
              type="email"
              placeholder="Correo electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 rounded-lg p-3 mb-8 focus:outline-none"
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="mb-8">
              <Link to="/Register" className="text-black">
                ¿No tienes una cuenta?
              </Link>
            </label>
            <div className="flex justify-between w-full">
              <button
                type="button"
                className="text-white bg-black rounded-lg p-3 w-[130px]"
                onClick={() => navigate("/Register")}
              >
                Regístrate
              </button>
              <button
                type="submit"
                className="text-white bg-black rounded-lg p-3 w-[130px]"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
