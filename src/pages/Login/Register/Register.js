import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Footer/Footer';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div >
            <Header></Header>
            <div className='Register'>
                <Container>
                    <Grid className='row justify-content-md-center' container spacing={2}>
                        <Grid className='col-md-auto register-card' item sx={{ mt: 8 }}>
                            <div>
                                <Typography className='fs-3 text-center text-light' gutterBottom>Register</Typography>
                                {!isLoading && <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Your Name"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        variant="standard" />
                                    <TextField
                                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                        id="standard-basic"
                                        label="ReType Your Password"
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        variant="standard" />

                                    <Button sx={{ width: '100%', mt: 1 }} type="submit" variant="contained">Register</Button>
                                    <br />
                                    <NavLink
                                        style={{ textDecoration: 'none' }}
                                        to="/login">
                                        <Button variant="text">Already Registered? Please Login</Button>
                                    </NavLink>
                                </form>}
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Register;