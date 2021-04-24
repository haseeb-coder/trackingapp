import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../images/applogo.jpg';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  logo: {
    display: 'flex',
    flexDirection: 'center',
    display: 'flex',
    width: '90%',
    hight:'.5%',
  
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
  
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
    const [message, setMessage] = React.useState('');
    const [email, SetEmail] = React.useState('');    
    const [password, SetPassword] = React.useState(''); 
    
    function loginClick(e){
        e.preventDefault();
        //console.log(email);
        //console.log(password);
        const obj = {
            email : email,
            password: password
        }
        
        
        axios.post('/signIn',obj).then(
            usr => { 
              if(usr["status"] === 200){
                    console.log(usr.statusText)
                    window.location.href = '/home';
                }                
            }
            ).catch(error => {
              setMessage("Invalid Username / Password. Please try again.")
            })
    }
    
    
    const classes = useStyles();
  
  return (
    <div>
       <Container component="main" maxWidth="xs">
        <img className={classes.logo} src={logo} alt="app logo" />
     
   
        
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in please...!
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange = {e => SetEmail(e.target.value)}
            value = {email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value = {password}
            onChange = {e => SetPassword(e.target.value)}
            autoComplete="current-password"
          />
          
          {message !== '' ? (<div className = "alert alert-danger">{message}</div>) : (<div></div>)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {loginClick}
            
          >
            Sign In
          </Button>

              
        </form>
      </div>
    </Container>
    </div>
  );
}