import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CardActions from "../Home/CardActions";
import Header from "../Shared/Post/Header";


const ContentCard = ({classes}) => {
    return (
        <Card className={classes.root} variant="outlined">
            <Typography variant="subtitle1" className={classes.topicTitle}>
                hər gün kənara bir manat atmaq
            </Typography>

            <Header/>

            {/* post content */}
            <CardContent className={classes.contentCard}>
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
        </Card>
    );
}

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
        },
    },
    contentCard: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 0),
        },
    },
    topicTitle: {
        padding: theme.spacing(0, 0, 1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 0, 0.5, 0),
        },
    },
});

export default withStyles(styles)(ContentCard);