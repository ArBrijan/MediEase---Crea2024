import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {
      name, 
      email,
      password, 
      age, 
      telefono
    })
    .then(result => {
      console.log(result);
      navigate('/Login');
    })
    .catch(err => console.log(err));
  }

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

      <div className="hidden md:flex md:w-[515px] h-[500px] items-center justify-center">
        <img
          className="rounded-xl shadow-lg"
          src="./src/assets/pills.png"
          alt="Imagen"
        />
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-10 flex flex-col w-[350px] md:w-[500px]">
        <h1 className="text-4xl font-semibold text-black mb-8 text-center">
          Regístrate
        </h1>
        <input
          className="border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none"
          type="text"
          placeholder="Nombre Completo"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none"
          type="email"
          placeholder="Correo"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none"
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none"
          type="number"
          placeholder="Edad"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg p-3 mb-8 focus:outline-none"
          type="tel"
          placeholder="Número telefónico"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="text-white  bg-black rounded-lg p-3 w-[130px]"
          >
            Registrarse
          </button>
          <Link
            to="/Login"
            className="text-white  bg-black rounded-lg p-3 w-[130px] text-center"
          >
            Iniciar Sesión
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;

