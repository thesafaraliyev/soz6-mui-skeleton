import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Link} from "react-router-dom";

import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";


const LeftSide = forwardRef((props, ref) => {
    const {window, classes, bottomBarRef} = props;
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };


    const hideDrawer = () => {
        setOpen(false);
        bottomBarRef.current.clearSelected();
    };


    useImperativeHandle(ref, () => {
        return {
            showDrawer: showDrawer,
            hideDrawer: hideDrawer,
        };
    });


    const drawer = (
        <>
            <Toolbar variant={'dense'} className={classes.sideToolbar}/>

            <div className={classes.drawerContainer}>

                <Card className={classes.cardHeader} variant='outlined'>
                    <CardContent className={classes.cardItem}>
                        <Typography variant="body2" component="p">
                            22 yazar 33 başlıq 53 entry
                        </Typography>
                    </CardContent>
                    <Divider/>

                    <CardActions className={classes.cardItem}>
                        <Button size="small" color='primary'>yenilə</Button>
                        <Button size="small" color='primary'>gündəm</Button>
                        <Button size="small" color='primary'>top</Button>
                    </CardActions>
                </Card>


                <List dense={true} className={classes.list}>
                    <ListItem button key='1'  component={Link} to={'/topic/epic-sozluk'} onClick={hideDrawer}>
                        <ListItemText primary='həyatın nə qədər cındır olduğunun anlaşıldığı anlar'/>
                    </ListItem>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/* mobile */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={'left'}
                    open={open}
                    onClose={hideDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>

            {/* desktop */}
            <Hidden xsDown implementation="css">
                <Drawer
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
})

const drawerWidth = 270;

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    sideToolbar: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    cardHeader: {
        margin: theme.spacing(2, 1, 0, 1),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(1),
        },
    },
    cardItem: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0),
    },
    list: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    }
});


LeftSide.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default withStyles(styles)(LeftSide);
