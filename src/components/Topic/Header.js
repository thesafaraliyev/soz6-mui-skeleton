import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


const Header = ({classes, topic}) => {
    return (
        <Card variant='outlined' className={classes.root}>

            <CardActionArea>
                <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1">
                        {topic.slug}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <Divider/>

            <CardActions className={classes.cardActions}>
                <Button size="small">
                    əjdaha
                </Button>
                <Button size="small">
                    bu gün
                </Button>
                <Button size="small">
                    izlə
                </Button>
                <Button size="small">
                    lələ
                </Button>
            </CardActions>

        </Card>
    );
}


const styles = theme => ({
    root: {
        // marginBottom: theme.spacing(2),
    },
    cardContent: {
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
    cardActions: {
        padding: theme.spacing(1, 2),
        '& > *': {
            padding: theme.spacing(0.375, 0.5),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
});


export default withStyles(styles)(Header);