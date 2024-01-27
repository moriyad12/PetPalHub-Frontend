import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "./loginComponent.css";

function LoginComponent(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={"loginComponentDiv "}>
            <form className="bg-white rounded shadow-5-strong p-5"
                  onSubmit={console.log(email + "?" + password)}>
                <h2>SignIn</h2>
                <div>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder={"Email"}/>
                </div>
                <div>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder={"Password"}/>
                </div>
                <button className="btn btn-primary" type='submit'>SignIn</button>
                <div>
                    <label>Don't have account</label>
                    <a href={"#"}>
                        SignUp
                    </a>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;