import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Actions from "../Shared/Post/Actions";
import Header from "../Shared/Post/Header";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Bullet from "../Shared/etc/Bullet";
import TelegramIcon from '@material-ui/icons/Telegram';
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from '@material-ui/icons/Visibility';

const Index = ({classes, content}) => {
    return (
        <Card variant='outlined'>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                // subheader="September 14, 2016"
            />
            <CardContent style={{
                paddingTop: '0px',
                paddingBottom: '0px',
            }}>
                <Typography variant="h6" component="p">
                    {content.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {content.content}
                </Typography>
            </CardContent>


            <CardActions className={classes.classActions}>
                <IconButton color="primary">
                    <ArrowUpwardIcon fontSize={'small'}/>
                </IconButton>
                <IconButton color="primary">
                    <ArrowDownwardIcon fontSize={'small'}/>
                </IconButton>
                <Bullet/>
                <IconButton color="primary">
                    <TelegramIcon fontSize={'small'}/>
                </IconButton>
                <IconButton>
                    <VisibilityIcon fontSize={'small'}/>
                </IconButton>
                <IconButton>
                    <SearchIcon fontSize={'small'}/>
                </IconButton>
                {/*<Button size="small" color="primary">*/}
                {/*    Share*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    );
}

const styles = theme => ({
    cardHeader: {
      padding: theme.spacing(1)
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
        backgroundColor: red[500],
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
});

export default withStyles(styles)(Index);