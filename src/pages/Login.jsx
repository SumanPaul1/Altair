import React from "react";
import "./style.scss"

const Login = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Altair.</span>
                <span className="logo-title">Login</span>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <button>Login</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;