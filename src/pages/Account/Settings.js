import React, {useContext} from 'react';
import  { Redirect } from 'react-router-dom'

import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";

import {UserContext} from '../../App'


const Settings = ({classes}) => {
    const user = useContext(UserContext);

    if (user) {
        return <Redirect to='/login'/>
    }

    return (
        <main className={classes.content}>
            <Toolbar variant={'dense'}/>

            Settings
        </main>
    );
}


const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        '& > div:not(:first-child):not(:last-child)': {
            marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(7),
            '& > div:not(:first-child):not(:last-child)': {
                marginBottom: theme.spacing(1)
            },
        },
    },
});


export default withStyles(styles)(Settings);