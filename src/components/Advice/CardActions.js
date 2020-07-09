import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SmsOutLinedIcon from '@material-ui/icons/SmsOutlined';


import Bullet from "../Shared/Bullet";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";


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

            <Bullet/>

            <Tooltip title="mesaj">
                <IconButton color="primary">
                    <SmsOutLinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="mesaj">
                <IconButton color="primary">
                    <VisibilityOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="googlla">
                <IconButton color="primary">
                    <SearchIcon fontSize={'small'}/>
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

export default withStyles(styles)(Actions);