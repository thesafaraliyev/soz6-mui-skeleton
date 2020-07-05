import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Link} from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import withStyles from "@material-ui/core/styles/withStyles";


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
                icon={<QuestionAnswerOutlinedIcon/>}
            />

            <BottomNavigationAction
                component={Link}
                to={'/account/'}
                label="mən"
                value="me"
                icon={<AccountCircleOutlinedIcon/>}
            />

            <BottomNavigationAction
                // onClick={() => setRightSideOpen(true)}
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