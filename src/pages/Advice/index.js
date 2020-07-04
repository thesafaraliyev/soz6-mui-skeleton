import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Post from "../Advice/Post";

const Advice = ({classes, match}) => {
    const topicSlug = match.params.slug;

    const data = {
        qu: 1,
        test: 2,
    };
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.root}>
                EPIC Sözlük --- advice
            </Typography>

            <Post/>
            <Post/>

        </div>
    );
}

const styles = theme => ({});

export default withStyles(styles)(Advice);