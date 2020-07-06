import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Link} from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from "@material-ui/core/Badge";


const BottomNav = forwardRef(({classes, leftSideRef, rightSideRef}, ref) => {
    const [bottomBarValue, setBottomBarValue] = useState(null);


    const handleBottomBarChange = (event, newValue) => {
        setBottomBarValue(newValue);
    };

    const clearSelected = () => {
        setBottomBarValue(null);
    };

    useImperativeHandle(ref, () => {
        return {
            clearSelected: clearSelected,
        };
    });


    return (
        <BottomNavigation value={bottomBarValue} showLabels onChange={handleBottomBarChange} className={classes.root}>

            <BottomNavigationAction
                onClick={() => leftSideRef.current.showDrawer()}
                label="bu gün"
                value="today"
                icon={<CalendarViewDayOutlinedIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/messages/'}
                label="mesajlar"
                value="messages"
                icon={<TextsmsOutlinedIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/notifications/'}
                label="bildirşlər"
                value="noti"
                icon={<NotificationsNoneOutlinedIcon/>}
            />

            <BottomNavigationAction
                onClick={() => rightSideRef.current.showDrawer()}
                label="məsləhətxana"
                value="advice"
                icon={<ContactSupportOutlinedIcon/>}
            />

        </BottomNavigation>
    );
})


const styles = theme => ({
    root: {
        // width: 500,
    },
});


export default withStyles(styles)(BottomNav);