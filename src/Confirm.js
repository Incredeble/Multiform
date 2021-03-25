import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { List , ListItem } from 'material-ui'

export default class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const styles = {
            button: {
                margin: 15
            }
        }
        const {values : { firstName,lastName,email,occupation,city,bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm" />
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem             primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = "Occupation"
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText = "City"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText = "Bio"
                            secondaryText = { bio }
                        />
                    </List>
                    <br/>
                    <RaisedButton label="Confirm & Continue" primary={true} style = {styles.button} onClick={this.continue} />
                    <RaisedButton label="Back" primary={true} style = {styles.button} onClick={this.back} />
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

