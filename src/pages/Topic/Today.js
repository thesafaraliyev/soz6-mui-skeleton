import React, {useState} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";


const Today = ({classes, match}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (

        <main className={classes.content}>
            <Toolbar variant={'dense'}/>

            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                dense={true}
                className={classes.list}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="filter" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List
                        component="div"
                        disablePadding
                        dense={true}
                        className={classes.list}
                    >
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>

            <Divider/>

            <List dense={true} className={classes.list}>
                <ListItem button key='1' component={Link} to={'/topic/epic-sozluk'}>
                    <ListItemText primary='həyatın nə qədər gözəl olduğunun anlaşıldığı anlar'/>
                </ListItem>
                <ListItem button key='2' component={Link} to={'/topic/sabuncu-xestexanasinin-biabirci-veziyyeti'}>
                    <ListItemText primary='sabunçu xəstəxanasının biabırçı vəziyyəti'/>
                </ListItem>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>

        </main>


    );
}


const styles = theme => ({
    header: {
        // display: 'flex',
        [theme.breakpoints.down('xs')]: {
            // justifyContent: 'center',
            // textAlign: 'center',
        },
    },
    buttonGroup: {
        [theme.breakpoints.down('xs')]: {
            // display: 'flex',
            // justifyContent: 'center',
            // textAlign: 'center',
        },
    },
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 2),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 1),
            marginBottom: theme.spacing(10)
        },
    },
});


export default withStyles(styles)(Today);