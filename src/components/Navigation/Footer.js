import React, {useState} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Copyright} from "@material-ui/icons";


const Footer = ({classes}) => {
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Copyright
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Some descriptive text here
                </Typography>
                <Copyright/>
            </Container>
        </footer>
    );
};


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
});


export default withStyles(styles)(Footer);