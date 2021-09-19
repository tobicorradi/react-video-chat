import React, {useContext} from 'react'
import {Grid, Typography, Paper} from '@material-ui/core'
import Options from '../Options'
import Notifications from '../Notifications'
import {SocketContext}  from '../../SocketContext'
const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
    return (
        <Grid container>
            {stream && (
                    <Paper>
                        <Grid item xs={12} md={6}> 
                            <Typography variant="h5" gutterBottom>{name || 'Placeholder name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay></video>
                        </Grid>
                    <Options>
                        <Notifications />
                    </Options>

                    </Paper>
                )
            }
            {callAccepted && !callEnded && (
                <Paper>
                    <Grid item xs={12} md={6}> 
                        <Typography variant="h5" gutterBottom>{call.name || 'Placeholder name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay></video>
                    </Grid>
                </Paper>
                )
            }
        </Grid>
    )
}

export default VideoPlayer
