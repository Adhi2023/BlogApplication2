import {TextField ,Button,Paper} from '@mui/material'


const Signup = () => {

    const paperStyle={padding:20,height:'70vh',width:340,margin:"10px auto"}
    return ( 
        <div className="signup">
            <form>
                <Paper elevation={10} style={paperStyle}>
                    <h1>sign up</h1>
                    <TextField label="Name" placeholder='enter your name' type="text" variant="standard" fullWidth required/>
                    <h4> </h4>
                    <TextField label="email" placeholder='enter your email' type="text" variant="standard" fullWidth required/>
                    <h4> </h4>
                    <TextField label="phone no" placeholder='enter your phone number' type="text" variant="standard" fullWidth required/>
                    <h4> </h4>
                    <TextField label="password" placeholder='enter your password' type="password" variant="standard" fullWidth required/>
                    <h4> </h4>
                    <TextField label="confirm password" placeholder='re-enter your password' type="password" variant="standard" fullWidth required/>
                    <h4> </h4>
                    <Button  type='submit' variant="contained" disableElevation fullWidth>sign up</Button>
                   
                </Paper>
            </form>
        </div>
     );
}
 
export default Signup;