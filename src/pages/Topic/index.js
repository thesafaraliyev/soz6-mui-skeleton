import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Post from "./Post";

const Topic = ({classes, match}) => {
    const topicSlug = match.params.slug;

    const data = {
        qu:1,
        test: 2,
    };
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Sözlük --- topic
            </Typography>

            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}

const styles = theme => ({
});

export default withStyles(styles)(Topic);