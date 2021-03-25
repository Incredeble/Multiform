import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormPersonDetails extends Component {

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
        const {values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField hintText="Enter Your Occupation"
                    floatingLabelText = "Occupation"
                    onChange = {handleChange('occupation')}
                    value = {values.occupation}
                    />
                    <br/>
                    <TextField hintText="Enter Your City"
                    floatingLabelText = "City"
                    onChange = {handleChange('city')}
                    value = {values.city}
                    />
                    <br/>
                    <TextField hintText="Enter Your Bio"
                    floatingLabelText = "Bio"
                    onChange = {handleChange('bio')}
                    value = {values.bio}
                    />
                    <br/>
                    <RaisedButton label="Continue" primary={true} style = {styles.button} onClick={this.continue} />
                    <RaisedButton label="Back" primary={true} style = {styles.button} onClick={this.back} />
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

