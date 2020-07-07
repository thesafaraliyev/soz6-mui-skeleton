import React, {useState} from 'react';
import {Link} from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpIcon from '@material-ui/icons/Help';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import withStyles from "@material-ui/core/styles/withStyles";


const MobileBottom = ({classes}) => {
    const [bottomBarValue, setBottomBarValue] = useState(null);

    const handleBottomBarChange = (event, newValue) => {
        console.log(newValue)
        setBottomBarValue(newValue);
    };


    return (
        <BottomNavigation
            value={bottomBarValue}
            showLabels
            onChange={handleBottomBarChange}
            className={classes.root}
        >

            <BottomNavigationAction
                component={Link}
                to={'/today/'}
                label="bu gün"
                value="today"
                icon={<CalendarViewDayIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/messages/'}
                label="mesajlar"
                value="messages"
                icon={<SmsIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/notifications/'}
                label="bildirişlər"
                value="noti"
                icon={<NotificationsIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/advices/'}
                label="məsləhətxana"
                value="advices"
                icon={<HelpIcon/>}
            />

        </BottomNavigation>
    );
};


const styles = theme => ({
    root: {
        // width: 500,
    },
});


export default withStyles(styles)(MobileBottom);