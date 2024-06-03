import { useEffect, useState } from "react"
import { Home } from "./HomePage"
import { Login } from "./Login"
import { Register } from "./Register"
import { Info } from "./Info"
import DoctorCrud from "./DoctorCrud"
import { Consul } from "./Consul"

export function App(){

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
 
    return(
        <>
        {currentPath === '/Home' && <Home/>}
        {currentPath === '/Login' && <Login/>}
        {currentPath === '/Register' && <Register/>}
        {currentPath === '/Info' && <Info/>}
            {currentPath === '/DoctorCrud' && <DoctorCrud />}
            {currentPath === '/Consul' && <Consul/>}
        </>      
    )
}