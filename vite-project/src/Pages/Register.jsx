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
    <div className="w-full h-screen relative flex items-center justify-center">
      <div
        style={{ backgroundColor: "#EEF2F5" }}
        className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
      >
        <img
          className="w-[170px]"
          src="./src/assets/newLogo.png"
          alt="LogoEmpresa"
        />

        <Link to="/" className="text-white bg-black p-3 rounded">
          Regresar
        </Link>
      </div>
      <div className="w-0 md:w-[500px] h-[500px] border hidden md:flex justify-center items-center">
        <img
          className="w-[500px] h-[495px]"
          src="./src/assets/pills.png"
          alt="Imagen"
        />
      </div>
      <form onSubmit={handleSubmit} className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
        <h1 className="text-3xl font-medium">Regístrate</h1>
        <br />
        <input
          className="border p-2"
          type="text"
          placeholder="Nombre Completo"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="border p-2"
          type="email"
          placeholder="Correo"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="border p-2"
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="border p-2"
          type="number"
          placeholder="Edad"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          className="border p-2"
          type="tel"
          placeholder="Número telefónico"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <br />
        <div className="flex justify-evenly text-center">
          <button
            type="submit"
            className="text-white bg-black p-3 rounded w-[110px]"
          >
            Register
          </button>
          <Link
            to="/Login"
            className="text-white bg-black p-3 rounded w-[110px]"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
