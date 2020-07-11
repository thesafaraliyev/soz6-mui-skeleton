import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import Tooltip from "@material-ui/core/Tooltip";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Bullet from "../Shared/Bullet";
import SmsOutLinedIcon from "@material-ui/icons/SmsOutlined";
import ReplyIcon from '@material-ui/icons/Reply';

const Comment = ({classes, comment}) => {

    const nestedComments = (comment.children || []).map(comment => {
        return <Comment comment={comment} classes={classes} key={comment.id}/>;
    });

    return (
        <>

            <div className={classes.root}>
                {/*<CardHeader*/}
                {/*    avatar={*/}
                {/*        */}
                {/*    }*/}
                {/*    title="Shrimp and Chorizo Paella"*/}
                {/*    subheader="September 14, 2016"*/}
                {/*    className={classes.cardHeader}*/}
                {/*/>*/}
                <div style={{
                    display: 'flex',
                    marginBottom: '10px',
                }}>
                    <Avatar aria-label="recipe"
                            className={classes.avatar}
                    >
                        R
                    </Avatar>

                    <Typography
                        className={classes.title}
                        style={{
                            fontSize: '13px',
                            marginLeft: '8px',
                            fontWeight: 500,
                        }}

                    >
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

                <div>
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
        </>
    );
};


const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderLeft: '1px solid rgba(255, 255, 255, 0.23)',
        // borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        // padding: theme.spacing(1, 1.5),
        // marginBottom: theme.spacing(0.5),
        // [theme.breakpoints.down('xs')]: {
        //     padding: theme.spacing(0.5, 1),
        // },
    },
    avatar: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
    },
    cardHeader: {
        padding: theme.spacing(1, 0),
    },
    cardContent: {
        padding: theme.spacing(0.5, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    },
});


export default withStyles(styles)(Comment);