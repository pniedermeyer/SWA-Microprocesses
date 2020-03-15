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
              fullWidth/>

            <TextField 
              className={props.props.classes.TextField} 
              id="standard-basic" 
              label="Password" 
              style={{ display: "inline-block"}}
              fullWidth
              />

            <TextField 
              style={{display: "inline-block"}}
              className={props.props.classes.TextField} 
              id="standard-basic" 
              label="E-Mail" 
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