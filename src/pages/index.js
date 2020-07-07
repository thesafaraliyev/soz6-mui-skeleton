import React, {useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from "@material-ui/core/styles/withStyles";

// nav
import Header from "../components/Navigation/Header";
import MobileBottom from "../components/Navigation/MobileBottom";

// pages
import Home from "./Home";

import Topic from "./Topic";
import Today from "./Topic/Today";

import Advice from "./Advice";
// import Advices from "./Advice/All";

import Account from "./Account";
import Settings from "./Account/Settings";
import Profile from "./Profile";
import Messages from "./Messages";
import Notifications from "./Notifications";


const Base = ({classes}) => {
    const bottomBarRef = useRef(null);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router>

                {/* bottom bar */}
                <AppBar position="fixed" className={classes.bottomNav}>
                    <MobileBottom/>
                </AppBar>

                {/* top bar */}
                <AppBar position="fixed" className={classes.appBar}>
                    <Header bottomBarRef={bottomBarRef}/>
                </AppBar>

                {/*<UserContext.Provider value={currentUser}>*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/account/" component={Account}/>
                    <Route exact path="/settings/" component={Settings}/>
                    <Route exact path="/profile/" component={Profile}/>
                    <Route exact path="/messages/" component={Messages}/>
                    <Route exact path="/notifications/" component={Notifications}/>

                    <Route exact path="/today/" component={Today}/>
                    {/*<Route exact path="/top/" component={Top}/>*/}
                    <Route exact path="/topic/:slug/" component={Topic}/>

                    <Route exact path="/advice/:slug/" component={Advice}/>
                    {/*<Route exact path="/advices/" component={Advices}/>*/}
                </Switch>
                {/*</UserContext.Provider>*/}

            </Router>
        </div>
    );
};


const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    bottomNav: {
        display: 'none',
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
});


export default withStyles(styles)(Base);