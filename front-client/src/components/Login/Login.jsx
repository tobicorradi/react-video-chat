import React, {useState, useContext} from 'react'
import {Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core'
import {SocketContext} from '../../SocketContext'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    minHeight: {
        minHeight: "100vh"
    },
    paddingBox: {
        padding: "30px"
    },
    button: {
        marginTop: "30px"
    }
}))
const Login = () => {
    const {name, setName} = useContext(SocketContext)
    const classes = useStyles()

    return (
        <Grid className={classes.minHeight} container justifyContent="center" alignItems="center">
           <Paper elevation={10} className={classes.paddingBox}>
                <form noValidate autoComplete="off">
                    <Typography variant="h6">Account Info</Typography>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                    <Button disabled={name == ''} className={classes.button} variant="contained" color="primary" fullWidth>Log In</Button>
                </form>
            </Paper> 
        </Grid>
    )
}

export default Login
