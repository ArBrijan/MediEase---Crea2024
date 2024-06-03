export function Consul() {
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

          <a
            style={{ backgroundColor: "#1E1E1E" }}
            className="text-white left-[670%] top-[15%] p-[15px] rounded-lg"
            href="/Home"
          >
            Regresar
          </a>
        </div>
        <section className="-mt-96">
            <div className="">
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-black">
                Mis consultas
              </h1>
          </div>
          <div className="w-[96px] ">
            
          </div>
        </section>
      </div>
    </>
  );
}
