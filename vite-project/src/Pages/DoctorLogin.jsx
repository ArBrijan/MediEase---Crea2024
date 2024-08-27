import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/doctor-login", { email, password });
      if (response.data.message === "Success") {
        navigate("/AppointmentCrud");  // Redirige al dashboard del doctor
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error en el servidor");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-black mb-8 text-center">Inicio de sesión Doctor</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:border-black"
            />
          </div>
          <div className="mb-8">
            <label className="block text-black text-sm font-medium mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-black transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorLogin;

