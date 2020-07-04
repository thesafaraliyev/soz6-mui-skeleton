import React from 'react';

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

const Topic = ({classes, match}) => {
    const topicSlug = match.params.slug;

    const data = {
        qu: 1,
        test: 2,
    };
    return (
        <div>
            <div className={classes.header}>
                <PageTitle title={'həyatın nə qədər cındır olduğunun anlaşıldığı anlar - topic'}/>

                <div className={classes.buttonGroup}>
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

            <Pager count={15}/>
        </div>
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
    }
});

export default withStyles(styles)(Topic);