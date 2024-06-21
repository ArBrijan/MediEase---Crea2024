import React, { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./HomePage";
import { Register } from "./Register";
import DoctorCrud from "./DoctorCrud";
import Pruebas from "./Pruebas";
import DropdownDoctor from "../Components/Dropdown";


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
    },
    {
        path: 'DropdownDoctor',
        element: <DropdownDoctor />
    }
]);

export function App() {

    return (
        <>
         <RouterProvider router={router} />
        </>
    );

}
