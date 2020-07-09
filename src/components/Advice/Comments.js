import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PostCard from "../../components/Advice/PostCard";
// import aa from './aa.css'

import Comment from "../../components/Advice/Comment";



const Comments = ({classes, comments}) => {

    const nestedComments = (comments.children || []).map(comment => {
        return <Comment comment={comment} />;
    });

    return (
        <div>
            <Card variant='outlined' style={{marginLeft: '25px'}}
                // className={classes.root}
            >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe"
                            // className={classes.avatar}
                        >
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    // className={classes.cardHeader}
                />
                <CardContent
                    // className={classes.cardContent}
                >
                    <Typography variant="body2" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>


                {nestedComments}

            </Card>
        </div>
    );
};


const styles = theme => ({
    contentWrapper: {
        display: 'grid',
        msGridColumns: 'auto 1fr',

    },
    root: {
        padding: theme.spacing(1, 1.5),
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
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


export default withStyles(styles)(Comments);