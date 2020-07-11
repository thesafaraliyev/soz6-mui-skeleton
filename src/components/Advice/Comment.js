import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReplyIcon from "@material-ui/icons/Reply";

import Bullet from "../Shared/Bullet";


const Comment = ({classes, comment}) => {
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment comment={comment} classes={classes} key={comment.id}/>;
    });

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Avatar aria-label="recipe" className={classes.avatar}/>
                <Typography className={classes.title}>
                    kafkanın playboy jurnalları <Bullet/> September 14, 2016
                </Typography>
            </div>


            <CardContent
                className={classes.cardContent}
            >
                <Typography variant="body2" component="p">
                    {comment.text}
                </Typography>
            </CardContent>

            <div className={classes.actions}>
                <Tooltip title="əjdaha">
                    <IconButton>
                        <ArrowUpwardIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="umbay">
                    <IconButton>
                        <ArrowDownwardIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>

                <Bullet/>

                <Tooltip title="mesaj">
                    <IconButton>
                        <ReplyIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>
            </div>

            {nestedComments}
        </div>
    );
};


const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderLeft: '1px solid rgba(255, 255, 255, 0.23)',
        // borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1.5),
        },
    },
    header: {
      display: 'flex',
    },
    avatar: {
        width: theme.spacing(2.125),
        height: theme.spacing(2.125),
    },
    title: {
        fontSize: '13px',
        marginLeft: theme.spacing(1),
        fontWeight: 600,
    },
    cardHeader: {
        padding: theme.spacing(1, 0),
    },
    cardContent: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 0),
        },
    },
    actions: {

    },
});


export default withStyles(styles)(Comment);