import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import Bullet from "../etc/Bullet";

const Actions = ({classes}) => {

    return (
        <CardActions className={classes.classActions}>
            <IconButton color="primary">
                <ArrowUpwardIcon fontSize={'small'}/>
            </IconButton>
            <IconButton color="primary">
                <ArrowDownwardIcon fontSize={'small'}/>
            </IconButton>
            <IconButton color="primary">
                <FavoriteIcon fontSize={'small'}/>
            </IconButton>
            <Bullet/>
            <IconButton color="primary">
                <ShareIcon fontSize={'small'}/>
            </IconButton>
            <IconButton color="primary">
                <MoreHorizOutlinedIcon fontSize={'small'}/>
            </IconButton>
            {/*<Button size="small" color="primary">*/}
            {/*    Share*/}
            {/*</Button>*/}
        </CardActions>
    );
}

const styles = theme => ({
    classActions: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    }
});

export default withStyles(styles)(Actions);