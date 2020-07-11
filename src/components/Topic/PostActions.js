import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import Bullet from "../Shared/Bullet";
import Tooltip from "@material-ui/core/Tooltip";


const PostActions = ({classes}) => {
    return (
        <CardActions className={classes.classActions}>
            <Tooltip title="əjdaha">
                <IconButton color="inherit">
                    <ArrowUpwardIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="umbay">
                <IconButton color="inherit">
                    <ArrowDownwardIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="favori">
                <IconButton color="inherit">
                    <FavoriteBorderOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Bullet/>

            <Tooltip title="paylaş">
                <IconButton color="inherit">
                    <ShareIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="digər">
                <IconButton color="inherit">
                    <MoreHorizOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>
        </CardActions>
    );
}


const styles = theme => ({
    classActions: {
        padding: theme.spacing(0),
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    }
});

export default withStyles(styles)(PostActions);