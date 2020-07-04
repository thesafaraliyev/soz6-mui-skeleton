import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

const Bullet = ({classes}) => {
    return (
        <span className={classes.bullet}>•</span>
    );
}

const styles = theme => ({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
});

export default withStyles(styles)(Bullet);