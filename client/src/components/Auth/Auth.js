import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import Input from './Input';


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const dispatch = useDispatch();

  const handleSubmit = () => {

  };

  const handleChange = () => {


  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup );
    handleShowPassword(false);

  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
        dispatch({type: 'AUTH', data: { result, token} });   
    } catch (error) {
        console.log(error);   
    }
  };

  const googleFaliure = () => {
    console.log("Google Sign in was unsuccessful. Try Again Later");
  };

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />

            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignup && (
                    <>
                        <Input name='firstName' label='First Name' handleChange={handleChange} half/>
                        <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                    </>
                    )}
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}

                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin 
                    clientId='727384123678-h9a7hv1n5r5ndvku5lb6k355rvpfb6c7.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button 
                        className={classes.googleButton} 
                        color='primary' 
                        fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        startIcon={<Icon />} 
                        variant='contained' 
                        >

                            Google Sign In
                        </Button>

                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFaliure}
                    cookiePolicy='single_host_origin'
                
                />
                <Grid type='container' justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign up"}

                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  );
};

export default Auth;