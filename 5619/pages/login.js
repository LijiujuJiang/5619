import * as React from 'react';
import { useState, useEffect } from "react"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import "../pages/css/login.css"
function Login() {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    let pwdFlag = true
    let emailFlag = true

    useEffect = () => {
        if (password == undefined) {
            pwdFlag = false
        }
        if (email == undefined) {
            emailFlag = false
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:80/admin/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: email,  // 使用email作为用户名
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            // 根据后端的响应处理前端逻辑
        alert(data.msg);
            
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    


    return (
        <body className='BG1'>
            <div className='Box'>
                <div className='Title1'>
                    <h4>My Health</h4>
                    <h6>Don't have an account?
                        <h7> <Link to='/register'> Sign up!</Link></h7>
                    </h6>
                </div>
                <div className='start'>
                    <p className='weltitle'>Welcome back</p>
                    <p className='welcome'>Login into your account</p>
                </div>
                <div className='icon1'>
                    <div className='google'><a href='#'>Google</a></div>
                    <div className='facebook'><a href='#'>Facebook</a></div>
                </div>
                <div className='line'>
                    <div className='vector left'>—————————</div>
                    <p>Or continue with</p>
                    <div className='vector right'>—————————</div>
                </div>
                <form action='www.baidu.com' >
                    <div className='input1'>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="EnterEmail"
                                    label="Enter Email"
                                    name="email"
                                    autoComplete="EnterEmail"
                                    onChange={(e) => SetEmail(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className='input1'>
                        <Grid container spacing={5}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    type='password'
                                    id="Password"
                                    label="Password"
                                    name="password"
                                    autoComplete="Password"
                                    onChange={(e) => SetPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className='pwd'>
                        <div className='switch'>
                            <Switch
                            // onChange={ }
                            />
                            Rember me
                        </div>
                        <Link to="/forget" >
                            <div className='forget'>

                                Forget Password

                            </div>
                        </Link>

                    </div>
                    <Link to="/" >
                        <button className='submit' onClick={handleLogin}>
                            Log in
                        </button>
                    </Link>

                </form>
            </div>

        </body>
    )
}
export default Login