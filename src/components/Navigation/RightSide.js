import React, {useState, forwardRef, useImperativeHandle} from 'react';

import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";

const drawerWidth = 270;

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
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
});

const RightSide = forwardRef((props, ref) => {
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
            <Toolbar variant={'dense'}/>
            <div className={classes.drawerContainer}>
                <List dense={true}>
                    <ListItem button key='1'  component={Link} to={'/advice/meslehet-1'} onClick={hideDrawer}>
                        <ListItemText primary='məsləhət 1'/>
                    </ListItem>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                            <ListItemText primary={text} />
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
            <Hidden mdUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={"right"}
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
            <Hidden smDown implementation="css">
                {/*<Hidden only={['sm', 'xs', 'md']} implementation="css">*/}
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    anchor={"right"}
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
});


RightSide.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withStyles(styles)(RightSide);
