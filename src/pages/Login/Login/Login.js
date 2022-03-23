// import login from '../../../../public/images/login.jpg';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Footer/Footer';
import './Login.css';
import background from './login.jpg';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        console.log(e);
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='login' >
            <Header></Header>
            <div>
                <Container>
                    <Grid className='row justify-content-md-center' container spacing={2}>
                        <Grid className='col-md-auto login-card' item sx={{ mt: 8 }}>
                            <Typography className='fs-3 text-center text-light' gutterBottom>Login</Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />



                                <Button sx={{ width: '100%', mt: 1 }} type="submit" variant="contained">Login</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <br />
                                    <Button className='text-warning' variant="text">New User? Please Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>

                            <Button sx={{ mb: 1 }} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Footer></Footer>
        </div>
    );
};

export default Login;