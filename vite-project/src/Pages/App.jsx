import { useEffect, useState } from "react"
import { Home } from "./HomePage"
import { Login } from "./Login"
import { Register } from "./Register"

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}

export function App(){

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect(() =>{
        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(NAVIGATION_EVENT, onLocationChange)

        return () => {
            window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
        }
    }, [])
 
    return(
        <>
        {currentPath === '/Home' && <Home/>}
        {currentPath === '/Login' && <Login/>}
        {currentPath === '/Register' && <Register/>}
        </>
    )
}