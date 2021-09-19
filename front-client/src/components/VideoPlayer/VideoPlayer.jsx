import React, {useContext} from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import {SocketContext}  from '../../SocketContext'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    video: {
        margin: '0 auto',
        position: 'relative'
    },
    nameLabel: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        margin: '0',
        padding: '5px 15px',
        backgroundColor: '#3f51b5',
        color: 'white',
        borderRadius: '10px 0 0 0',
        textTransform: 'uppercase',
        fontSize: "13px"
    }
}))
const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
    const classes = useStyles()
    return (
        <Grid container>
            {stream && (
                    <Paper className={classes.video}>
                        <Grid item xs={12} md={6}> 
                            <Typography variant='h6' gutterBottom className={classes.nameLabel}>{name || 'Write your name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay></video>
                        </Grid>
                    </Paper>
                )}
            {callAccepted && !callEnded && (
                <Paper className={classes.video}>
                    <Grid item xs={12} md={6}> 
                        <video playsInline ref={userVideo} autoPlay></video>
                        <Typography variant='h6' gutterBottom className={classes.nameLabel}>{name || 'Write your name'}</Typography>
                    </Grid>
                </Paper>
            )}
        </Grid>
    )
}

export default VideoPlayer
