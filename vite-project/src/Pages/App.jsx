import React, { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./HomePage";
import { Register } from "./Register";
import DoctorCrud from "./DoctorCrud";
import Pruebas from "./Pruebas";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'Register',
        element: <Register />
    },
    {
        path: 'DoctorCrud',
        element: <DoctorCrud />
    },
    {
        path: 'Pruebas',
        element: <Pruebas />
    }
]);

export function App() {

    return (
        <>
         <RouterProvider router={router} />
        </>
    );

}
