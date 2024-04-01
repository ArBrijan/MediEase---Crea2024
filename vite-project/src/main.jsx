import { BrowserRouter } from "react-router-dom"
import "./index.css"
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from "./principal"
import { InicioSesion } from "./login"
import { Registro } from "./register"



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Principal />
    </>
)
