import { Typography, TextField, Button, Link } from "@material-ui/core";
import React from "react";


export default function Signin(props:any){
    return(<div>
            <Typography variant="h5" gutterBottom>
              Anmeldung
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
              type="password"
              />

            <Link href="#" 
              onClick={props.signInLinkHandler} 
              style={{ display: "inline-block"}}
              color="inherit">
                {'Account erstellen'}
              </Link>

            <Button 
              className={props.props.classes.Button}
              variant="contained" 
              color="primary"
              fullWidth
              onClick={props.signInButtonHandler}>
                Bestätigen
            </Button>
    </div>)
}
