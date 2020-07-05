import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const Settings = ({classes}) => {
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Settings
            </Typography>

        </div>
    );
}

const styles = theme => ({
});

export default withStyles(styles)(Settings);
