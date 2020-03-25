import { Typography, TextField, Button } from "@material-ui/core";
import React from "react";


export default function Signup(props:any){
    return(<div>            
            <Typography variant="h5" gutterBottom>
              Registrierung
            </Typography>

            <TextField 
              style={{display: "inline-block"}}
              className={props.props.classes.TextField} 
              id="standard-basic" 
              label="Username" 
              onChange={(e)=>props.setState({...props.state, SignUp:{...props.state.SignUp, name:e.currentTarget.value}})}
              fullWidth/>

            <TextField 
              className={props.props.classes.TextField} 
              id="standard-basic" 
              label="Password" 
              style={{ display: "inline-block"}}
              onChange={(e)=>props.setState({...props.state, SignUp:{...props.state.SignUp, pwd:e.currentTarget.value}})}
              fullWidth
              />

            <TextField 
              style={{display: "inline-block"}}
              className={props.props.classes.TextField} 
              id="standard-basic" 
              label="E-Mail" 
              onChange={(e)=>props.setState({...props.state, SignUp:{...props.state.SignUp, email:e.currentTarget.value}})}
              fullWidth/>

            <Button 
              className={props.props.classes.Button}
              variant="contained" 
              color="primary"
              fullWidth
              onClick={props.signUpButtonHandler}>
                Bestätigen
            </Button>
            </div>)
}