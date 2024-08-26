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
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div
        style={{ backgroundColor: "#EEF2F5" }}
        className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
      >
        <img
          className="w-[170px] "
          src="./src/assets/newLogo.png"
          alt="LogoEmpresa"
        />

        <Link to="/" className="text-white p-[15px] rounded-lg bg-black">
          Regresar
        </Link>
      </div>

      {/* Contenido principal */}
      <main className="flex flex-col md:flex-row justify-center items-center mt-24">
        {/* Imagen a la izquierda */}
        <div className="w-0 md:w-1/2 md:mb-5 flex justify-center items-center">
          <img
            className="w-[450px] h-[495px]"
            src="./src/assets/pills.png"
            alt="Imagen"
          />
        </div>
        <div className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-3xl font-medium">Inicia sesión</h1>
            <br />
            <input
              className="border p-2"
              type="email"
              placeholder="Correo electrónico"
              required
              value={email} // Añadir el valor actual del estado
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="border p-2"
              type="password"
              placeholder="Contraseña"
              required
              value={password} // Añadir el valor actual del estado
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>
              <Link to="/Register">¿No tienes una cuenta?</Link>
            </label>
            <br />
            <div className="flex justify-evenly text-white w-full">
              <button
                type="button"
                className="bg-black p-3 rounded w-32"
                onClick={() => navigate("/Register")}
              >
                Regístrate
              </button>
              <button type="submit" className="bg-black p-3 rounded w-32">
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
