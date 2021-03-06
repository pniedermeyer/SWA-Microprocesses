import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
// import { List, ListItemText, ListItem, Divider } from '@material-ui/core';

import {postLogin, postSighUp, getData} from "./requests";
import Signin from "./ViewSignin";
import Signup from "./ViewSignup";
import ViewData from "./ViewData";


const styles = (theme: Theme) => createStyles({

  TextField:{
    margin: '0 0 5px 0',
    // backgroundcolor: 'red',
  },

  Paper:{
    padding: '10px',
    'text-align': 'center'
  },

  Button:{
    margin: '10px 0 0 0',
    width: '100%',
    display: "inline-block",
  }
});

interface Props extends WithStyles<typeof styles>{};

//const classes = useStyles();


// const initialState = {whichUI: '0'};
// type State = Readonly<typeof initialState>;

interface IState {
  whichUI: string,
  data:{name:string, email:string, pwd:string, id:string},
  logIn:{name:string, pwd:string},
  signUp:{name:string, pwd:string, email:string},
  token:string
}

class App extends React.Component<Props, IState>{
  //state: State = initialState;

  constructor(props:any) {
    super(props);
    this.state = {whichUI: '0', data: {name: "", email:"", pwd:"", id:""}, logIn: {name:"", pwd:""}, signUp:{name:"", pwd:"", email:""}, token:""};
    this.signInButtonHandler= this.signInButtonHandler.bind(this);
    this.signInLinkHandler= this.signInLinkHandler.bind(this);
    this.signUpButtonHandler= this.signUpButtonHandler.bind(this);
    this.viewDataButtonHandler= this.viewDataButtonHandler.bind(this);

  }

  signInButtonHandler(){
    let request = postLogin(JSON.stringify(this.state.logIn))
    if(request.token){
      let info = getData(request.token);
      this.setState({...this.state, whichUI:'2', token:request.token, data:info});
    }
  }

  signInLinkHandler(){
    this.setState({...this.state, whichUI:'1'});
  }

  signUpButtonHandler(){
    let request = postLogin(JSON.stringify(this.state.signUp))
    if(request.token){
      let info = getData(request.token);
      this.setState({...this.state, whichUI:'2', token:request.token, data:info});
    }
  }

  viewDataButtonHandler(){
    this.setState({whichUI:'0'});
  }

  renderSwitch() {
    switch(this.state.whichUI) {
      case '0':
        return Signin(this);
      case '1':
        return Signup(this);
      case '2':
        return ViewData(this);
      default:
        return '';
    }
  }


  render() {
    return( 
      <Grid container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <Grid item xs={3}>
          <Paper className={this.props.classes.Paper}>
            {this.renderSwitch()}
          </Paper>
        </Grid>
      </Grid>
    )
  }

}


export default withStyles(styles)(App);
