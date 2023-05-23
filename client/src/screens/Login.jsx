import { Button } from "antd"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../utils/Config"
import { useEffect, useState } from "react"
import { Navigate, redirect,useNavigate  } from "react-router-dom"

const LoginPage = () =>{
    const [value,setValue] = useState('')
    const navigate = useNavigate();

    const handleClick = () =>{
        signInWithPopup(auth,provider).then((data)=>{
            console.log(data);
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("photoURL",data.user.photoURL)
            localStorage.setItem("displayName",data.user.displayName)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    useEffect(()=>{
        value&& navigate('/')
    },[value])
    return(
        <div >
            <Button onClick={handleClick} type="primary">Sign In With Google</Button>
        </div>
    )
}
export default LoginPage