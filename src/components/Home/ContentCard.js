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
            <Typography variant="body1" className={classes.topicTitle}>
                hər gün kənara bir manat atmaq
            </Typography>

            <Header/>

            {/* post content */}
            <CardContent className={classes.contentCard}>
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
}

const styles = theme => ({
    root: {
        // ...theme.typography.button,
        // backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(2),
    },
    contentCard: {
        margin: theme.spacing(0, 1.5),
        padding: theme.spacing(0),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1),
        },
    },
    topicTitle: {
        margin: theme.spacing(1, 1.5),
        fontSize: '1.1rem',
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(1),
        },
    },
});

export default withStyles(styles)(ContentCard);