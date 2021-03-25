import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export default class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <br/>
                    <h1>Thank You For Your Submission</h1>
                    <p>You wil get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:
    {
        margin : 15
    }
}