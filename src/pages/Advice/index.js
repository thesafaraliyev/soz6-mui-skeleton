import React, {useRef} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
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

import RightSide from "../../components/Navigation/RightSide";
import {LEFT_SIDE_CONTENT} from '../Home'
import {RIGHT_SIDE_CONTENT} from '../Topic'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Post from "../../components/Advice/Post";



const Topic = ({classes, match}) => {
    const slug = match.params.slug;
    const content = {
        id: 1,
        title: slug,
        content: 'ala indi bir poxdu yemişəm souls-like oyun oynamaq istəyirəm. nəsə mortal shell açıq beta olub bu gün onu oynadım. sualım budur ki, belə oyunlar əsasən necə oynanılır, gamepad\'la yoxsa klaviuatura mouse\'la? yəni belə bilirəm oynayan ikisi ilə də oynayar. amma məsələn futbol oyunlarını da hər iki yolla oynamaq olur pc-də amma hamı gamepad\'la oynayır yəni, oyun ona görə qurulub -* belə youtube\'da falan baxdıqlarım çoxu gamepad\'la oynayır deyə tərəddüd içində qaldım.'
    };

    return (
        <>

            {/* left */}
            <LeftSide content={LEFT_SIDE_CONTENT}/>


            {/* content here */}
            <main className={classes.content}>
                <Toolbar variant={'dense'}/>
                <Post content={content}/>


                {/*<Divider/>*/}

                {/*<Pager count={15}/>*/}

            </main>

            {/* right */}
            <RightSide content={RIGHT_SIDE_CONTENT}/>

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


export default withStyles(styles)(Topic);