import React from 'react';

import Pagination from "@material-ui/lab/Pagination";
import withStyles from "@material-ui/core/styles/withStyles";

const Pager = ({classes, count = 10}) => {
    return (
        <Pagination count={count} siblingCount={0} className={classes.pagination}/>
    );
}

const styles = theme => ({
    pagination: {
        padding: theme.spacing(2, 0),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0),
        },
    }
});

export default withStyles(styles)(Pager);