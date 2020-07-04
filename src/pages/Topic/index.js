import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Post from "../../components/Topic/Post";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import IconButton from "@material-ui/core/IconButton";
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import SearchIcon from '@material-ui/icons/Search';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import Divider from "@material-ui/core/Divider";
import Pager from "../../components/Shared/etc/Pager";

const Topic = ({classes, match}) => {
    const topicSlug = match.params.slug;

    const data = {
        qu: 1,
        test: 2,
    };
    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.headerText}>
                    EPIC Sözlük sads ada das ddsa dsa das--- topic
                </Typography>

                <div>
                    <IconButton>
                        <HowToRegOutlinedIcon fontSize={'small'}/>
                    </IconButton>
                    <IconButton>
                        <VisibilityOutlinedIcon fontSize={'small'}/>
                    </IconButton>
                    <IconButton>
                        <PortableWifiOffIcon fontSize={'small'}/>
                    </IconButton>
                    <IconButton>
                        <SearchIcon fontSize={'small'}/>
                    </IconButton>
                </div>
            </div>


            <Post/>
            <Post/>
            <Post/>

            <Divider/>

            <Pager count={15} />
        </div>
    );
}

const styles = theme => ({
    header: {
        display: 'flex',
    },
    headerText: {
        flexGrow: 1,
    },
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default withStyles(styles)(Topic);