    import React, { useEffect, useState } from "react";
    import {createBrowserRouter, RouterProvider} from "react-router-dom"
    import { Home } from "./HomePage";
    import { Register } from "./Register";
    import { Login } from "./Login"
    import DoctorCrud from "./DoctorCrud";
    import Pruebas from "./Pruebas";
    import DropdownDoctor from "../Components/Dropdown";
    import { Info } from "./Info";
    import { UserPage } from "./UserPage"


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
        },
        {
            path: 'Info',
            element: <Info />
        },
        {
            path: 'UsersPage',
            element: <UserPage />
        }
    ]);

    export function App() {

        return (
            <>
            <RouterProvider router={router} />
            </>
        );

    }
