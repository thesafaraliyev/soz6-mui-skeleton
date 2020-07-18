import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import 'fontsource-roboto';

import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {light, dark} from "./components/Theme/Palette";
import MobileBottom from "./components/Navigation/MobileBottom";
import Header from "./components/Navigation/Header";
import ScrollIntoView from "./components/Navigation/ScrollIntoView";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Settings from "./pages/Account/Settings";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Today from "./pages/Topic/Today";
import Topic from "./pages/Topic";
import Advice from "./pages/Advice";
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';


export const UserContext = React.createContext();
export const NAV_EXCLUDED_URLS = [
    '/signIn/',
    '/signUp/',
];


function App() {
    const classes = useStyles();

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme(!prefersDarkMode ? light : dark),
        [prefersDarkMode],
    );

    // const currentUser = {username: 'Elshan'};
    const currentUser = null;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={classes.root}>
                <Router>

                    {/* bottom bar */}
                    <AppBar position="fixed" className={classes.bottomNav}>
                        <MobileBottom/>
                    </AppBar>

                    {/* top bar */}
                    <AppBar position="fixed" className={classes.appBar}>
                        <Header user={currentUser}/>
                    </AppBar>

                    <UserContext.Provider value={currentUser}>
                        <ScrollIntoView>
                            <Switch>
                                <Route exact path="/signIn/" component={SignIn}/>
                                <Route exact path="/signUp/" component={SignUp}/>

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
                        </ScrollIntoView>
                    </UserContext.Provider>

                </Router>
            </div>
        </ThemeProvider>
    );
}

const useStyles = makeStyles((theme) => ({
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
}));


export default App;

