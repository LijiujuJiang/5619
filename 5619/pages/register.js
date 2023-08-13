import * as React from 'react';
import { useState, useEffect } from "react"
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../pages/css/register.css"




function Register() {
    const [name, SetName] = useState()
    const [email, SetEmail] = useState()
    const [password1, SetPassword1] = useState()
    const [password2, SetPassword2] = useState()
    let pwdFlag = true
    let nameFlag = true
    let emailFlag = true
    const defaultTheme = createTheme();

    useEffect(() => {
        if (password1 !== password2) {
            pwdFlag = false
        }
        if (name == undefined) {
            nameFlag = false
        }
        if (email == undefined) {
            emailFlag = false
        }
    })


    const handleRegister = (e) => {
        e.preventDefault()
        if (pwdFlag == false) {
            alert("密码不一样")
        } else if (nameFlag == false) {
            alert("请填写用户名")
        } else if (emailFlag == false) {
            alert("请填写邮箱")
        }
        else {
            alert("姓名：" + name + "email: " + email + "密码：" + password1)
            const formData = {
                username: name,
                password: password1,
                email: email
            }
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    accept: "application/json", "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => {
                    // 处理后端返回的数据
                })
                .catch(error => {
                    // 处理错误
                });



            window.location.href = '/login';
        }



    }

    return (
        <body className='BG'>
            <div className='Box'>
                <div className='Title'>
                    <h4>My Health</h4>
                    <h6>have an account?
                        <h7> <Link to='/login'> Log in!</Link></h7>
                    </h6>
                </div>
                <div className='start'>
                    Get Started With MyHealth
                </div>
                <div className='icon'>
                    <div className='google'><a href='#'>Google</a></div>
                    <div className='facebook'><a href='#'>Facebook</a></div>
                </div>
                <div className='line'>
                    <div className='vector left'>—————————</div>
                    <p>Or continue with</p>
                    <div className='vector right'>—————————</div>
                </div>
                <form action='www.baidu.com' >
                    <div className='input'>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="FullName"
                                    label="Full Name"
                                    name="FullName"
                                    autoComplete="Fullname"
                                    onChange={(e) => SetName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className='input'>
                        <Grid container spacing={5}>
                            <Grid item xs={12} >
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
                    <div className='input'>
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
                                    onChange={(e) => SetPassword1(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className='input'>
                        <Grid container spacing={5}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    type='password'
                                    id="Password"
                                    label="confirm Password"
                                    name="password"
                                    autoComplete="Password"
                                    onChange={(e) => SetPassword2(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <Link to="/login" >
                        <button className='submit' onClick={handleRegister}>
                            Create Account
                        </button>
                    </Link>



                </form>
            </div>
        </body>

    )
}

export default Register
