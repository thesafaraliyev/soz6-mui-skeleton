import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import Bullet from "../Shared/Bullet";
import Tooltip from "@material-ui/core/Tooltip";


const Actions = ({classes}) => {
    return (
        <CardActions className={classes.classActions}>
            <Tooltip title="əjdaha">
                <IconButton color="primary">
                    <ArrowUpwardIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="umbay">
                <IconButton color="primary">
                    <ArrowDownwardIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="favori">
                <IconButton color="primary">
                    <FavoriteIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Bullet/>

            <Tooltip title="paylaş">
                <IconButton color="primary">
                    <ShareIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="digər">
                <IconButton color="primary">
                    <MoreHorizOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>
        </CardActions>
    );
}


const styles = theme => ({
    classActions: {
        padding: theme.spacing(0),
        margin: theme.spacing(0.5, 1.5),
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    }
});

export default withStyles(styles)(Actions);