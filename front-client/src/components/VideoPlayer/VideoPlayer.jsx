import React, {useContext} from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import {SocketContext}  from '../../SocketContext'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    video: {
        margin: '0 auto'
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
                            <Typography variant="h5" gutterBottom>{name || 'Placeholder name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay></video>
                        </Grid>
                    </Paper>
                )}
            {callAccepted && !callEnded && (
                <Paper>
                    <Grid item xs={12} md={6}> 
                        <Typography variant="h5" gutterBottom>{call.name || 'Placeholder name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay></video>
                    </Grid>
                </Paper>
            )}
        </Grid>
    )
}

export default VideoPlayer
