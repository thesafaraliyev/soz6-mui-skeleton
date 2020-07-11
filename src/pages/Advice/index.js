import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";

import LeftSide from "../../components/Navigation/LeftSide";
import RightSide from "../../components/Navigation/RightSide";
import PostCard from "../../components/Advice/PostCard";

import {LEFT_SIDE_CONTENT} from '../Home'
import {RIGHT_SIDE_CONTENT} from '../Home'
import ContentCard from "../../components/Advice/ContentCard";

const Advice = ({classes, match}) => {
    const slug = match.params.slug;
    const author = 'kafkanın playboy jurnalları';
    const advice = {slug, author};

    return (
        <>
            {/* left */}
            <LeftSide content={LEFT_SIDE_CONTENT}/>


            {/* content here */}
            <main className={classes.content}>

                <Toolbar variant={'dense'}/>

                <PostCard advice={advice}/>

                <ContentCard/>

            </main>

            {/* right */}
            <RightSide content={RIGHT_SIDE_CONTENT}/>
        </>
    );
};


const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        '& > div:not(:first-child):not(:last-child)': {
            marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(7),
            '& > div:not(:first-child):not(:last-child)': {
                marginBottom: theme.spacing(1)
            },
        },
    },
});


export default withStyles(styles)(Advice);