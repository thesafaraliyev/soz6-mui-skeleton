import React from "react";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const Notifications = ({classes}) => {
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Sözlük --- Notifications
            </Typography>

            {/*<Post/>*/}

        </div>
    );
}

const styles = theme => ({
});

export default withStyles(styles)(Notifications);
