import {List, ListItem, ListItemText, Divider, Button } from "@material-ui/core";
import React from "react";
import { getThemeProps } from "@material-ui/styles";


export default function Data(props:any){
    return(<div>
            <List>
                <ListItem>
                    <ListItemText primary="Username" secondary= {props.state.viewData.name} /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                  <ListItemText primary="Password" secondary={props.state.viewData.pwd} /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                  <ListItemText primary="E-Mail" secondary={props.state.viewData.email} /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                  <ListItemText primary="ID" secondary={props.state.viewData.id} /></ListItem>
                <Divider component="li" />
                <li></li>
            </List>

            <Button 
              className={props.props.classes.Button}
              variant="contained" 
              color="primary"
              fullWidth
              onClick={props.viewDataButtonHandler}>
                Zurück
            </Button>
          </div>)
}