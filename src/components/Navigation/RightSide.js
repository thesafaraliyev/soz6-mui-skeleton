import React from 'react';

import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";

const drawerWidth = 300;

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

const RightSide = ({window, classes, content}) => {
    const drawer = (
        <>
            <Toolbar variant={'dense'}/>
            <div className={classes.drawerContainer}>
                <List dense={true}>
                    {content.map((listItem, index) => (
                        <ListItem
                            button
                            key={listItem.id}
                            component={Link} to={`/advice/${listItem.slug}/`}
                        >
                            <ListItemText primary={listItem.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/*<Hidden mdUp implementation="css">*/}
            {/*    <Drawer*/}
            {/*        container={container}*/}
            {/*        variant="temporary"*/}
            {/*        anchor={"right"}*/}
            {/*        open={false}*/}
            {/*        // onClose={hideDrawer}*/}
            {/*        classes={{*/}
            {/*            paper: classes.drawerPaper,*/}
            {/*        }}*/}
            {/*        ModalProps={{*/}
            {/*            keepMounted: true, // Better open performance on mobile.*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {drawer}*/}
            {/*    </Drawer>*/}
            {/*</Hidden>*/}
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
};


RightSide.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withStyles(styles)(RightSide);
