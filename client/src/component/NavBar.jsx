import { Avatar, Button } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'

const NavBar = () =>{
    const navigate=useNavigate()
    const [auth,setAuth] = useState()
    useEffect(()=>{
        setAuth({displayName:localStorage.getItem('displayName'),photoURL:localStorage.getItem('photoURL')})
    },[])

    const handleLogOut= () =>{
        localStorage.clear()
        navigate("/login")
    }
    return(
        <div className="bar">
            <p className="name">Hello <b>{auth?.displayName}</b></p>
            <Avatar className="avatar" src={auth?.photoURL} />
            <Button className="logout" onClick={handleLogOut} >Log Out</Button>
        </div>
    )
}
export default NavBar