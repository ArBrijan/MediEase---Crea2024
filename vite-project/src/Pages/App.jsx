    import React, { useEffect, useState } from "react";
    import {createBrowserRouter, RouterProvider} from "react-router-dom"
    import { Home } from "./HomePage";
    import { Register } from "./Register";
    import { Login } from "./Login"
    import { AppointmentCrud } from "./DoctorCrud";
    import Pruebas from "./Pruebas";
    import DropdownDoctor from "../Components/Dropdown";
    import { Info } from "./Info";
    import { UserPage } from "./UserPage"
    import DoctorManager from "./DoctorManager";
    import DoctorLogin from "./DoctorLogin";


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
            path: 'Login',
            element: <Login />
        },
        {
            path: 'AppointmentCrud',
            element: <AppointmentCrud />
        },
        {
            path: 'Pruebas',
            element: <Pruebas />
        },
        {
            path: 'DropdownDoctor',
            element: <DropdownDoctor />
        },
        {
            path: 'Info',
            element: <Info />
        },
        {
            path: 'UserPage',
            element: <UserPage />
        },
        {
            path: 'DoctorManager',
            element: <DoctorManager/>
        },
        {
            path: 'DoctorLogin',
            element: <DoctorLogin />
        }
    ]);

    export function App() {

        return (
            <>
            <RouterProvider router={router} />
            </>
        );

    }
