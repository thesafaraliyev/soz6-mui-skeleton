import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import CardActions from "../../components/Advice/CardActions";
import CategoryChipSet from "../../components/Topic/CategoryChipSet";

import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from "@material-ui/core/Paper";

const PostCard = ({classes, data}) => {
    return (
        <Card className={classes.root} elevation={0} variant='outlined'>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        K
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={data.authorName}
                subheader="September 14, 2016"
                className={classes.cardHeader}
            />

            <Typography variant="body1" className={classes.adviceTitle}>
                {data.slug}
            </Typography>
            <CategoryChipSet/>


            {/* post content */}
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="primary" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </Typography>
            </CardContent>

            <CardActions/>

        </Card>

    );
};


const styles = theme => ({
    root: {
        padding: theme.spacing(1, 1.5),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
    avatar: {
        // width: theme.spacing(4),
        // height: theme.spacing(4),
    },
    cardHeader: {
        padding: theme.spacing(1, 0),
    },
    adviceTitle: {
        // padding: theme.spacing(1, 1.5, 0, 1.5),
        fontSize: '1.3rem',
    },
    cardContent: {
        padding: theme.spacing(0.5, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    },
});


export default withStyles(styles)(PostCard);