import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from "@material-ui/core/Tooltip";
import SmsOutLinedIcon from "@material-ui/icons/SmsOutlined";
import CardActions from "@material-ui/core/CardActions";


const Actions = ({classes}) => {
    return (
        <div className={classes.buttonGroup}>
            <Tooltip title="mesaj">
                <IconButton>
                    <SmsOutLinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="izlə">
                <IconButton>
                    <VisibilityOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>


            <Tooltip title="googlla">
                <IconButton>
                    <SearchIcon fontSize={'small'}/>
                </IconButton>
            </Tooltip>
        </div>

    );
}


const styles = theme => ({
    buttonGroup: {
        // padding: theme.spacing(0.5, 0),
    },
});


export default withStyles(styles)(Actions);