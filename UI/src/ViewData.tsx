import {List, ListItem, ListItemText, Divider, Button } from "@material-ui/core";
import React from "react";


export default function Data(props:any){
    return(<div>
            <List>
                <ListItem>
                    <ListItemText primary="Username" secondary="admin" /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                <ListItemText primary="Password" secondary="admin" /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                <ListItemText primary="E-Mail" secondary="admin@admin.de" /></ListItem>
                <Divider component="li" />
                <li></li>
                <ListItem>
                <ListItemText primary="ID" secondary="00000042" /></ListItem>
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