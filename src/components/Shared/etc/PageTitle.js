import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const PageTitle = ({classes, title}) => {
    return (
        <Typography variant="h6" className={classes.headerText}>{title}</Typography>
    );
}

const styles = theme => ({
    headerText: {
        // flexGrow: 1,
    },
});

export default withStyles(styles)(PageTitle);