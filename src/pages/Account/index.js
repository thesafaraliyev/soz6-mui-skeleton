import React from "react";
import Typography from "@material-ui/core/Typography";
import Post from "../Topic/Post";
import withStyles from "@material-ui/core/styles/withStyles";

const Account = ({classes}) => {

    const data = {
        qu:1,
        test: 2,
    };
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Sözlük --- account
            </Typography>

            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<PostContent/>*/}
            {/*<PostContent/>*/}

        </div>
    );
}

const styles = theme => ({
});

export default withStyles(styles)(Account);
