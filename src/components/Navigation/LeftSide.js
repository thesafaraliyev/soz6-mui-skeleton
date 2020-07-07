import React, {useState} from 'react';
import {Link} from "react-router-dom";

import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import withStyles from "@material-ui/core/styles/withStyles";


const LeftSide = ({window, classes, content = []}) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleDropDownClick = () => {
        setDropDownOpen(!dropDownOpen);
    };


    const drawer = (
        <>
            <Toolbar variant={'dense'} className={classes.sideToolbar}/>

            <div className={classes.drawerContainer}>

                {/*<Card className={classes.cardHeader} variant='outlined'>*/}
                {/*    <CardContent className={classes.cardItem}>*/}
                {/*        <Typography variant="body2" component="p">*/}
                {/*            22 yazar 33 başlıq 53 entry*/}
                {/*        </Typography>*/}
                {/*    </CardContent>*/}
                {/*    <Divider/>*/}

                {/*    <CardActions className={classes.cardItem}>*/}
                {/*        <Button size="small" color='primary'>yenilə</Button>*/}
                {/*        <Button size="small" color='primary'>gündəm</Button>*/}
                {/*        <Button size="small" color='primary'>top</Button>*/}
                {/*    </CardActions>*/}
                {/*</Card>*/}

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    dense={true}
                    className={classes.list}
                >
                    <ListItem button onClick={handleDropDownClick}>
                        <ListItemText primary="filter"/>
                        {dropDownOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>

                    <Collapse in={dropDownOpen} timeout="auto" unmountOnExit>
                        <List
                            component="div"
                            disablePadding
                            dense={true}
                            className={classes.list}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="bugün"/>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="təsadüfi"/>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>

                <Divider/>


                <List dense={true} className={classes.list}>
                    {content.map((listItem, index) => (
                        <ListItem
                            button
                            key={listItem.id}
                            component={Link} to={`/topic/${listItem.slug}/`}
                        >
                            <ListItemText primary={listItem.title}/>
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
            {/* mobile */}
            {/*<Hidden smUp implementation="css">*/}
            {/*    <Drawer*/}
            {/*        container={container}*/}
            {/*        variant="temporary"*/}
            {/*        anchor={'left'}*/}
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
};


const drawerWidth = 300;

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
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
});


LeftSide.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default withStyles(styles)(LeftSide);
