import React, {useRef} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from "@material-ui/core/styles/withStyles";

import BottomNav from "../components/Navigation/BottomNav";
import Header from "../components/Navigation/Header";
import LeftSide from "../components/Navigation/LeftSide";
import RightSide from "../components/Navigation/RightSide";
import Topic from "./Topic";
import Advice from "./Advice";
import Account from "./Account";
import Settings from "./Account/Settings";
import Profile from "./Profile";
import Messages from "./Messages";
import Notifications from "./Notifications";


const Base = ({classes, content}) => {
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);
    const bottomBarRef = useRef(null);


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router>


                {/* bottom bar */}
                <AppBar position="fixed" className={classes.bottomNav}>
                    <BottomNav leftSideRef={leftSideRef} rightSideRef={rightSideRef} ref={bottomBarRef}/>
                </AppBar>


                {/* top bar */}
                <AppBar position="fixed" className={classes.appBar}>
                    <Header bottomBarRef={bottomBarRef}/>
                </AppBar>


                {/* left */}
                <LeftSide ref={leftSideRef} bottomBarRef={bottomBarRef}/>


                {/* content here */}
                <main className={classes.content}>
                    <Toolbar variant={'dense'}/>
                    {/*<UserContext.Provider value={currentUser}>*/}
                    <Switch>
                        <Route exact path="/account/" component={Account}/>
                        <Route exact path="/settings/" component={Settings}/>
                        <Route exact path="/profile/" component={Profile}/>
                        <Route exact path="/messages/" component={Messages}/>
                        <Route exact path="/notifications/" component={Notifications}/>
                        <Route exact path="/topic/:slug/" component={Topic}/>
                        <Route exact path="/advice/:slug/" component={Advice}/>
                    </Switch>
                    {/*</UserContext.Provider>*/}
                </main>

                {/* right */}
                <RightSide ref={rightSideRef} bottomBarRef={bottomBarRef}/>

            </Router>

        </div>
    );
}

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
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 2),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 1),
            marginBottom: theme.spacing(10)
        },
    },
});

export default withStyles(styles)(Base);