import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
    return (
        <>
          <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/call">
                    <VideoPlayer />
                    <Options>
                        <Notifications />
                    </Options>
                </Route>
            </Switch>
      </Router>
            <AppBar>
                <Typography variant="h6">VideoChat <a href="https://www.corraditobias.com.ar/">by Tobías Corradi</a></Typography>
            </AppBar>
           
        </>
    )
}

export default App
