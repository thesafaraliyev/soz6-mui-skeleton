import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Pager from "../../components/Shared/Pager";
import Toolbar from "@material-ui/core/Toolbar";

import LeftSide from "../../components/Navigation/LeftSide";
import RightSide from "../../components/Navigation/RightSide";
import PostCard from "../../components/Topic/PostCard";
import Actions from "../../components/Topic/Actions";
import CategoryChipSet from "../../components/Topic/CategoryChipSet";

import {LEFT_SIDE_CONTENT} from '../Home'
import {RIGHT_SIDE_CONTENT} from '../Home'


const Topic = ({classes, match}) => {
    const slug = match.params.slug;

    return (
        <>
            {/* left */}
            <LeftSide content={LEFT_SIDE_CONTENT}/>


            {/* content here */}
            <main className={classes.content}>
                <Toolbar variant={'dense'}/>

                <div className={classes.header}>
                    <Typography variant="h6" className={classes.headerText}>
                        {slug}
                    </Typography>

                    <CategoryChipSet/>

                    <Actions/>
                </div>


                <div className={classes.postCard}>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </div>

                <Divider/>

                <Pager count={15}/>

            </main>

            {/* right */}
            <RightSide content={RIGHT_SIDE_CONTENT}/>

        </>
    );
}


const styles = theme => ({
    header: {
    },
    postCard: {
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