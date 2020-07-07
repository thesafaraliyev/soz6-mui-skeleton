import React, {useRef} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Post from "../../components/Topic/Post";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import IconButton from "@material-ui/core/IconButton";
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import SearchIcon from '@material-ui/icons/Search';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import Divider from "@material-ui/core/Divider";
import Pager from "../../components/Shared/etc/Pager";
import PageTitle from "../../components/Shared/etc/PageTitle";
import LeftSide from "../../components/Navigation/LeftSide";
import Toolbar from "@material-ui/core/Toolbar";
import {BrowserRouter as Router, Link} from "react-router-dom";
import RightSide from "../../components/Navigation/RightSide";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const Advices = ({classes}) => {
    // const slug = match.params.slug;
    const leftSideRef = useRef(null);
    const rightSideRef = useRef(null);
    const bottomBarRef = useRef(null);

    return (
        <>



            {/* left */}
            <LeftSide/>


            {/* content here */}
            <main className={classes.content}>
                <Toolbar variant={'dense'}/>

                <List dense={true}>
                    <ListItem button key='1'  component={Link} to={'/advice/meslehet-1'}>
                        <ListItemText primary='məsləhət 1'/>
                    </ListItem>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>



            </main>

            {/* right */}
            <RightSide/>

        </>
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


export default withStyles(styles)(Advices);