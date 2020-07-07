import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Pager from "../../components/Shared/Pager";
import Toolbar from "@material-ui/core/Toolbar";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import LeftSide from "../../components/Navigation/LeftSide";
import RightSide from "../../components/Navigation/RightSide";
import PostCard from "../../components/Topic/PostCard";
import Actions from "../../components/Topic/Actions";
import CategoryChipSet from "../../components/Topic/CategoryChipSet";

import {LEFT_SIDE_CONTENT} from '../Home'
import {RIGHT_SIDE_CONTENT} from '../Home'
import Bullet from "../../components/Shared/Bullet";


const Topic = ({classes, match}) => {
    const slug = match.params.slug;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {/* left */}
            <LeftSide content={LEFT_SIDE_CONTENT}/>


            {/* content here */}
            <main className={classes.content}>
                <Toolbar variant={'dense'}/>

                <div className={classes.header}>
                    {/*<Typography variant="h6" className={classes.headerText}>*/}
                    {/*    {slug}*/}
                    {/*</Typography>*/}

                    {/*<CategoryChipSet/>*/}

                    {/*<Actions/>*/}

                    <Card className={classes.root} variant='outlined'>
                        <div className={classes.cardHeader}>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                            <Typography className={classes.title} color="textSecondary">
                                kafkanın playboy jurnalları <Bullet/> September 14, 2016
                            </Typography>
                        </div>





                        <CardContent className={classes.cardContent}>
                            <Typography variant="h6" className={classes.headerText}>
                                {slug}
                            </Typography>

                            <Typography variant="body1" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <IconButton

                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </div>


                {/*<div className={classes.postCard}>*/}
                {/*    <PostCard/>*/}
                {/*    <PostCard/>*/}
                {/*    <PostCard/>*/}
                {/*</div>*/}

                {/*<Divider/>*/}
                {/**/}
                {/*<Pager count={15}/>*/}

            </main>

            {/* right */}
            <RightSide content={RIGHT_SIDE_CONTENT}/>

        </>
    );
}


const styles = theme => ({
    cardHeader: {
        display: 'flex',
        padding: theme.spacing(1.5),
    },
    cardContent: {
        padding: theme.spacing(0, 1.5),
    },
    title: {
        fontSize: '13px',
        margin: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            // margin: theme.spacing(0.5, 1),
        },
    },
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
    },
});


export default withStyles(styles)(Topic);