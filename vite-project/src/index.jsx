import { Body } from "./body"
import { InicioSesion } from "./login"
import { Registro } from "./register"
import { useState } from "react"
import { Preloader } from "./preloader"

export function Principal() {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    return (
        <>
            {currentPath === '/' && < Body />}
            {currentPath === '/Login' && < InicioSesion />}
            {currentPath === '/Register' && < Registro />}
        </>
    )
}