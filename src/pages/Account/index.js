import React from "react";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Account = ({classes}) => {
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Sözlük --- account
            </Typography>

            <Button component={Link} to={'/settings/'}>Settings</Button>
            {/*<Post/>*/}

        </div>
    );
}

const styles = theme => ({
});

export default withStyles(styles)(Account);
