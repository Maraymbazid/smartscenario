import React, { Component } from 'react'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

//const apilink ='http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44'
const Login = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="email" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login