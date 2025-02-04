import React from 'react';
import {Link, withRouter} from "react-router-dom";


import {fade} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SportsKabaddiOutlinedIcon from '@material-ui/icons/SportsKabaddiOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import FaceIcon from '@material-ui/icons/Face';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';


import {NAV_EXCLUDED_URLS} from '../../App'

const Header = ({classes, location, user}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const darkModeItem = (
        <MenuItem onClick={handleMenuClose}>
            <IconButton size='small'>
                <Brightness4Icon/>
            </IconButton>
            Qaranıq rejim
        </MenuItem>
    );

    const menuId = 'primary-search-account-menu';
    const userDropdown = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user && <div>
                <MenuItem onClick={handleMenuClose} component={Link} to={'/profile/'}>
                    <IconButton size='small'>
                        <FaceIcon/>
                    </IconButton>
                    mən
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to={'/settings/'}>
                    <IconButton size='small'>
                        <SettingsIcon/>
                    </IconButton>
                    tənzimləmələr
                </MenuItem>
                <Divider/>
                {darkModeItem}
                <Divider/>
                <MenuItem onClick={handleMenuClose}>
                    <IconButton size='small'>
                        <ExitToAppIcon/>
                    </IconButton>
                    çıxış
                </MenuItem>
            </div>}
            {!user && <div>
                {darkModeItem}
                <Divider/>
                <MenuItem
                    onClick={handleMenuClose}
                    // component={Link}
                    // to={'/signIn/'}
                >
                    <IconButton size='small'>
                        <ExitToAppIcon/>
                    </IconButton>
                    giriş / üzv ol
                </MenuItem>
            </div>}

        </Menu>
    );


    if (NAV_EXCLUDED_URLS.includes(location.pathname)) {
        return null;
    }


    return (
        <>
            <Toolbar variant='dense'>

                {/* logo */}
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    component={Link}
                    to={'/'}
                    // onClick={event => bottomBarRef.current.clearSelected()}
                >
                    <SportsKabaddiOutlinedIcon/>
                </IconButton>

                <Typography
                    className={classes.title}
                    variant="h6"
                    color='inherit'
                    noWrap
                    component={Link}
                    to={'/'}
                >
                    Epic Sözlük
                </Typography>


                {/* search */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                <div className={classes.grow}/>

                {/* desktop right buttons */}
                {user && <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit" component={Link} to={'/messages/'}>
                        {/*<Badge badgeContent={4} color="secondary">*/}
                        <MailIcon/>
                        {/*</Badge>*/}
                    </IconButton>

                    <IconButton aria-label="show 17 new notifications" color="inherit" component={Link}
                                to={'/notifications/'}>
                        {/*<Badge badgeContent={17} color="secondary">*/}
                        <NotificationsIcon/>
                        {/*</Badge>*/}
                    </IconButton>

                    <Button
                        edge='end'
                        aria-controls={menuId}
                        // aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        startIcon={<AccountCircle style={{fontSize: '1.5rem'}}/>}
                    >
                        {user.username}
                    </Button>

                </div>}

                {!user && <div className={classes.sectionDesktop}>
                    <Button color="inherit" component={Link} to={'/signIn/'}>giriş</Button>
                    <Button color="inherit" component={Link} to={'/signUp/'}>üzv ol</Button>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleProfileMenuOpen}
                    >
                        <AccountCircleIcon/>
                    </IconButton>
                </div>}


                {/* account */}
                <IconButton
                    edge="end"
                    className={classes.mobileAccountButton}
                    color="inherit"
                    onClick={handleProfileMenuOpen}
                >
                    <AccountCircleIcon/>
                </IconButton>

            </Toolbar>
            {userDropdown}
        </>
    );
};


const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        textDecoration: 'none',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoText: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        // display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    mobileAccountButton: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
});


export default withRouter(withStyles(styles)(Header));