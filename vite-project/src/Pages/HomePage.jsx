import React from 'react';
import { Link } from 'react-router-dom'; 

export function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center relative">
        <div
          className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
        >
          <img
            className="w-[170px]"
            src="./src/assets/newLogo.png"
            alt="LogoEmpresa"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl w-[600px] text-center font-medium m-5">
            ¡Tu salud está garantizada!
          </h1>
          <p className="w-[580px] text-center m-5 text-base font-medium">
            Inicia sesión o si no tienes, regístrate para que puedas acceder a
            tu historial de consultas.
          </p>
          <div className="flex flex-row mb-4">
            <Link
              className="bg-black text-white p-3 rounded w-28 text-center mb-1 mr-1"
              to="Register"
            >
              Registro
            </Link>

            <Link
              className="bg-black text-white p-3 rounded w-30 text-center mb-1 ml-1"
              to="Login"
            >
              Iniciar sesion
            </Link>
          </div>

          <Link className="bg-black text-white text-center p-3 rounded m-1 w-[232px]"
            to="Info">
            ¿Qué estás buscando?
          </Link>

          {/* Nuevo botón para doctores */}
          <Link
            className="bg-black text-white p-3 rounded m-1 w-[232px] text-center"
            to="DoctorLogin"
          >
            Inicio sesion doctores
          </Link>
        </div>
      </div>
    </>
  );
}
