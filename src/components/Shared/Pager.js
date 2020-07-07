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
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default withStyles(styles)(Pager);