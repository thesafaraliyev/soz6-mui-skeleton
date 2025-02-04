import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Bullet from "../Bullet";


const Header = ({classes}) => {
    return (
        <Typography className={classes.title} >
            kafkanın playboy jurnalları <Bullet/> September 14, 2016 <Bullet/> #123456789
        </Typography>
    );
}

const styles = theme => ({
    title: {
        fontSize: '13px',
        fontWeight: 600,
    },
});

export default withStyles(styles)(Header);