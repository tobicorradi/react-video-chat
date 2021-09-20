import React, {useState, useContext} from 'react'
import {Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core'
import {SocketContext} from '../../SocketContext'
import { makeStyles } from '@material-ui/styles'
import { Link, useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    minHeight: {
        minHeight: "100vh"
    },
    paddingBox: {
        padding: "30px"
    },
    input: {
        marginTop: "13px"
    },
    button: {
        marginTop: "30px"
    }
}))
const Login = () => {
    const {name, setName} = useContext(SocketContext)
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // const handleEnter = (e) => {
    //     if(e.key === 'Enter'){
    //         history.push('/call')
    //     }
    // }
    return (
        <Grid className={classes.minHeight} container justifyContent="center" alignItems="center">
            <Paper elevation={10} className={classes.paddingBox}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6">Account Info</Typography>
                    <TextField className={classes.input} label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                    <Button 
                    // onKeyPress= {handleEnter}
                    type="submit" component={Link} to={"/call"} disabled={name == ''} className={classes.button} variant="contained" color="primary" fullWidth>Login</Button>
                </form>
            </Paper> 
        </Grid>
    )
}

export default Login
