import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import Bullet from "../Shared/Bullet";
import CardActions from "../../components/Advice/CardActions";

const PostCard = ({classes, data}) => {
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" className={classes.adviceTitle}>
                {data.slug}
            </Typography>

            <div className={classes.cardHeader}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                </Avatar>
                <Typography className={classes.authorTitle} >
                    kafkanın playboy jurnalları <Bullet/> September 14, 2016
                </Typography>
            </div>

            {/* post content */}
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p">
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

        </div>

    );
};


const styles = theme => ({
    root: {
    },
    adviceTitle: {
        padding: theme.spacing(0, 0, 1, 0),
    },
    authorTitle: {
        marginLeft: theme.spacing(1),
        fontSize: '13px',
        fontWeight: 600,
    },
    avatar: {
        width: theme.spacing(2.125),
        height: theme.spacing(2.125),
    },
    cardHeader: {
        display: 'flex',
    },
    cardContent: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 0),
        },
    },
});


export default withStyles(styles)(PostCard);