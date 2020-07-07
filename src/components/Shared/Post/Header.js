import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Bullet from "../etc/Bullet";


const Header = ({classes}) => {
    return (
        <Typography className={classes.title} color="textSecondary">
            kafkanın playboy jurnalları <Bullet/> September 14, 2016 <Bullet/> #123456789
        </Typography>
    );
}

const styles = theme => ({
    title: {
        fontSize: '13px',
        margin: theme.spacing(1, 1.5),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0.5, 1),
        },
    },
});

export default withStyles(styles)(Header);