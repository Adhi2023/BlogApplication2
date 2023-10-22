import {TextField ,Button,Paper,FormControlLabel,Checkbox, Typography,Link} from '@mui/material'
import { FacebookLoginButton,GoogleLoginButton,} from 'react-social-login-buttons'


const Login = () => {

    const paperStyle={padding:20,height:'70vh',width:340,margin:"10px auto"}
   

    return ( 
        <div className="login">
            <form>
                <Paper elevation={15} style={paperStyle}>
                    <h1>Log in</h1>
                    <TextField label="email or phone" placeholder='enter your email or phone no' type="text" variant="outlined" fullWidth required />
                    <h4> </h4>
                    <TextField label="password" placeholder='enter your password' type="password" variant="outlined" fullWidth required/>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary"/>}
                        label="Remember me"
                    />
                    <Button  type='submit' variant="contained" disableElevation fullWidth >Log in</Button>
                    <Typography>
                        <Link href="#">
                            Forgot password
                        </Link>
                    </Typography>
                    <Typography>Don't have an account?
                        <Link href="/Signup">
                            Signup
                        </Link>
                    </Typography>
                    <GoogleLoginButton size='40px' />
                    <FacebookLoginButton size='40px' />
                </Paper>
            </form>
        </div>
     );
}
 
export default Login;