export function Body () {
    const Banner = () => {
        <h1>dsdwdwd</h1>
    }
    return(
        <div style={{height: "427px"}}className="relative">
            <img style={{opacity: "0.5", height: "427px"}} className="w-screen" src="./src/imgs/banner1.jpg" alt="Banner"/>
            <p  style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className="absolute text-6xl text-black-600">¡Tu salud al alcance de un código!</p>
        </div>
    )
}