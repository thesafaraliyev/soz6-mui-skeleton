import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";

import Bullet from "../Shared/Bullet";
import CardActions from "../../components/Advice/CardActions";


const PostCard = ({classes, advice}) => {
    console.log()
    return (
        <Card variant='outlined' className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.cardHeader}>
                    <Typography variant="subtitle1">
                        {advice.slug}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Divider/>

            <div className={classes.cardContent}>
                <div className={classes.authorContainer}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                    <Typography className={classes.authorTitle}>
                        {advice.author} <Bullet/> September 14, 2016
                    </Typography>
                </div>

                {/* post content */}
                <Typography variant="body2" component="p" className={classes.question}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </Typography>

                <CardActions/>

            </div>

        </Card>

    );
};


const styles = theme => ({
    root: {
        // marginBottom: theme.spacing(2),
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
    cardContent: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
        },
    },
    authorContainer: {
        display: 'flex',
    },
    avatar: {
        width: theme.spacing(2.125),
        height: theme.spacing(2.125),
    },
    authorTitle: {
        marginLeft: theme.spacing(1),
        fontSize: '13px',
        fontWeight: 600,
    },
    question: {
        padding: theme.spacing(1, 0),
    },
});


export default withStyles(styles)(PostCard);