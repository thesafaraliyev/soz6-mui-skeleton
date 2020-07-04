import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Bullet from "../etc/Bullet";


const Header = ({classes}) => {
    return (
        <Typography className={classes.title} color="textSecondary">
            Word of the Day <Bullet/> September 14, 2016
        </Typography>
    );
}

const styles = theme => ({
    title: {
        fontSize: 14,
        padding: theme.spacing(1, 2, 0, 2)
    },
});

export default withStyles(styles)(Header);