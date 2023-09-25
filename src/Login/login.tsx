import { loginfunc } from '../Backend/backendApi';
import './login.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="main">
            <div className="form-box">
                <h1>Login Here</h1>
                <form>
                    <div className="input-group">
                        <h5>Enter your user name:</h5>
                        <div className="input-field">
                            <i className="fa-regular fa-credit-card"></i>
                            <input id="username" type="text" onBlur={(event) =>{console.log(event.target.value); setUserName(event.target.value);}} placeholder="User name"></input>
                        </div>
                        <h5>Password:</h5>
                        <div className="input-field">
                            <i className="fa-solid fa-lock"></i>
                            <input id="password" type="password" onBlur={(event) =>{console.log(event.target.value); setPassword(event.target.value);}} placeholder="password"></input>
                        </div>
                        <p> Forgot Password? <a href="">click here!</a></p>
                    </div>
                </form>
                <button className="button" onClick={() => { loginfunc({ "username": username, "password": password }) }} >Login</button>
                <button className="button" >Home</button>
            </div>
        </div>
    );
}