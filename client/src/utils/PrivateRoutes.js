import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../component/NavBar/NavBar"

const PrivateRoutes = () => {
    const [auth, setAuth] = useState({ email: "a" })
    useEffect(() => {
        setAuth({ ...auth, email: localStorage.getItem('email') })
    }, [])

    

    return (
        <div>
            <NavBar />
            {auth.email ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoutes