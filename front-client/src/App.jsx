import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
const App = () => {
    return (
        <div>
            <AppBar>
                <Typography variant="h6">VideoChat <a href="https://www.corraditobias.com.ar/">by Tobías Corradi</a></Typography>
            </AppBar>
            <VideoPlayer />
        </div>
    )
}

export default App
