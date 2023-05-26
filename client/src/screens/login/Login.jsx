import { Button, Icon } from "antd"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../utils/Config"
import { useEffect, useState } from "react"
import { useNavigate  } from "react-router-dom"
import './style.css'

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
        <div className="background">
            <div className="containner">
                <img className="logo" src="/img/logo.png"/>
                <p className="companyName">Global Dial</p>
                <button className="btn"  onClick={handleClick} type="primary"><img className="googleIcon" src="/img/google.png"/><b>Sign In With Google</b></button>
            </div>
        </div>
    )
}
export default LoginPage