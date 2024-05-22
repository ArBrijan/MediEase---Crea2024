export function Register(){
    return(
        <>
        <div style={{backgroundColor: "#0366FF"}}  className="w-100% h-screen relative flex items-center justify-center">
        <nav style={{backgroundColor: "#EEF2F5"}} className="flex items-center justify-between p-[30px] absolute top-0 left-0 w-100%">
            <img className="w-[170px]  " src="./src/assets/newLogo.png" alt="LogoEmpresa" />
            <a style={{backgroundColor: "#1E1E1E"}} className="text-white absolute left-[90%] top-[6%] p-[15px] rounded-lg" href="/Home">Regresar</a>
        </nav>
        <div className=" w-[500px] h-[500px] border">
            <img src="./src/assets/pills.png" alt="Imagen" />
        </div>
        <div className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
            <h1 className="text-3xl font-medium">Registrate</h1><br />
            <input className="border p-2" type="text" placeholder="Nombre Completo" required/><br />
            <input className="border p-2" type="email" placeholder="Correo" required/><br />
            <input className="border p-2" type="password" placeholder="Contraseña" required/><br />
            <input className="border p-2" type="date" placeholder="Fecha de nacimiento" required/><br />
            <input className="border p-2" type="tel" placeholder="Número telefónico" required/><br />
            <button style={{backgroundColor: "#00D45C"}} className="text-white w-[110px] h-[50px] absolute righ-[65%] top-[70%] rounded-lg">Registrarse</button>
            <button style={{backgroundColor: "#0366FF"}} className="text-white w-[110px] h-[50px] absolute left-[65%] top-[70%] rounded-lg">Iniciar sesion</button>
        </div>
        </div>
        </>
    )
}