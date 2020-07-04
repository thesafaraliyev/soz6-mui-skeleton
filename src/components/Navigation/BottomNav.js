import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        // width: 500,
    },
});

const BottomNav = ({classes}) => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} showLabels onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Bu gün" value="recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            {/*<BottomNavigationAction label="Nearby" value="nearby2" icon={<LocationOnIcon/>}/>*/}
        </BottomNavigation>
    );
}

export default withStyles(styles)(BottomNav);