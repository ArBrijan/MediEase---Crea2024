import { Header } from "./header"
import { Body } from "./body"
import { InicioSesion } from "./login"
import { Registro } from "./register"
import { useState } from "react"

export function Principal() {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    return (
        <>
            {currentPath === '/' && < Header />}
            {currentPath === '/Body' && < Body />}
            {currentPath === '/Login' && < InicioSesion />}
            {currentPath === '/Register' && < Registro />}
        </>
    )
}



