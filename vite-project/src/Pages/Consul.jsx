import React from 'react';

export function Consul() {
  return (
    <>
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <div
          style={{ backgroundColor: "#EEF2F5" }}
          className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-full"
        >
          <img
            className="w-[170px]"
            src="./src/assets/newLogo.png"
            alt="LogoEmpresa"
          />
          <a
            style={{ backgroundColor: "#1E1E1E" }}
            className="text-white p-[15px] rounded-lg"
            href="/Home"
          >
            Regresar
          </a>
        </div>
        <section className="flex flex-col items-center mt-0">
          <div className="text-center">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-black">
              Mis consultas
            </h1>
          </div>
        </section>
        <div className="flex">
          {/* Primer cuadro */}
          <div className="relative self-start border p-4 border-[#8AC0FF] shadow-custom ml-10 mt-5 rounded-lg">
            <p className="mb-2 text-base">Nombre del doctor.</p>
            <p className="mb-2 text-base">Especialidad.</p>
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ir a ver receta
            </a>
            <img
              className="w-10 h-10 rounded-full object-cover absolute top-2 right-2"
              src="./src/assets/usuario.png"
              alt="Foto de la persona"
            />
          </div>

          {/* Segundo cuadro */}
          <div className="relative self-start border p-4 border-[#8AC0FF] shadow-custom ml-10 mt-5 rounded-lg">
            <p className="mb-2 text-base">Nombre del doctor.</p>
            <p className="mb-2 text-base">Especialidad.</p>
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ir a ver receta
            </a>
            <img
              className="w-10 h-10 rounded-full object-cover absolute top-2 right-2"
              src="./src/assets/usuario.png"
              alt="Foto de la persona"
            />
          </div>

          {/* Tercer cuadro */}
          <div className="relative self-start border p-4 border-[#8AC0FF] shadow-custom ml-10 mt-5 rounded-lg">
            <p className="mb-2 text-base">Nombre del doctor.</p>
            <p className="mb-2 text-base">Especialidad.</p>
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ir a ver receta
            </a>
            <img
              className="w-10 h-10 rounded-full object-cover absolute top-2 right-2"
              src="./src/assets/usuario.png"
              alt="Foto de la persona"
            />
          </div>

          {/* Cuarto cuadro */}
          <div className="relative self-start border p-4 border-[#8AC0FF] shadow-custom ml-10 mt-5 rounded-lg">
            <p className="mb-2 text-base">Nombre del doctor.</p>
            <p className="mb-2 text-base">Especialidad.</p>
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ir a ver receta
            </a>
            <img
              className="w-10 h-10 rounded-full object-cover absolute top-2 right-2"
              src="./src/assets/usuario.png"
              alt="Foto de la persona"
            />
          </div>
        </div>
      </div>
    </>
  );
}