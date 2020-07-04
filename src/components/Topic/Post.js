import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Actions from "../Shared/Post/Actions";
import Header from "../Shared/Post/Header";

const Index = ({classes}) => {
    return (
        <Card className={classes.root} variant="outlined">
            {/* user and post date */}
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

            <Actions/>
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
        padding: theme.spacing(1, 2, 0, 2),
    },
    classActions: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    }
});

export default withStyles(styles)(Index);