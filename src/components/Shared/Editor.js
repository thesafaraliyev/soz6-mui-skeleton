import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const Editor = ({actions, setText}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTyping = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className={classes.root}>
                <TextField
                    id="outlined-multiline-static"
                    label="adam balası kimi məsləhət ver.."
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    placeholder='Some text here'
                    onChange={handleTyping}
                    color='secondary'
                />

                <div className={classes.mobileButtonGroup}>
                    <ButtonGroup
                        size='small'
                        variant='text'
                        // color='secondary'
                        className={classes.mobileButtonGroup}
                        disableElevation
                    >
                        <Button size='small' color='secondary' disableElevation onClick={handleClick}>daxil et</Button>

                    </ButtonGroup>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem dense onClick={handleClose}>bax</MenuItem>
                        <MenuItem dense onClick={handleClose}>gbax</MenuItem>
                        <MenuItem dense onClick={handleClose}>q</MenuItem>
                        <MenuItem dense onClick={handleClose}>i</MenuItem>
                        <MenuItem dense onClick={handleClose}>u</MenuItem>
                        <MenuItem dense onClick={handleClose}>youtube</MenuItem>
                        <MenuItem dense onClick={handleClose}>link</MenuItem>
                        <MenuItem dense onClick={handleClose}>foto</MenuItem>
                        <MenuItem dense onClick={handleClose}>video</MenuItem>
                    </Menu>
                </div>

                <ButtonGroup
                    size='small'
                    variant='outlined'
                    color='secondary'
                    className={classes.buttonGroup}
                    disableElevation
                >
                    <Button size='small' color='default' disableElevation>bax</Button>
                    <Button size='small' color='default' disableElevation>gbax</Button>
                    <Button size='small' color='default' disableElevation>q</Button>
                    <Button size='small' color='default' disableElevation>i</Button>
                    <Button size='small' color='default' disableElevation>u</Button>
                    <Button size='small' color='default' disableElevation>youtube</Button>
                    <Button size='small' color='default' disableElevation>link</Button>
                    <Button size='small' color='default' disableElevation>foto</Button>
                    <Button size='small' color='default' disableElevation>video</Button>

                </ButtonGroup>

                {actions}

            </div>
        </>

    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        // [theme.breakpoints.down('xs')]: {
        //     textAlign: 'center',
        // },
    },
    mobileButtonGroup: {
        textAlign: 'right',
        display: 'none',
        // padding: theme.spacing(0.5, 0),
        // textTransform: 'none',
        padding: theme.spacing(0.5, 0),
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    buttonGroup: {
        textAlign: 'right',
        display: 'block',
        // padding: theme.spacing(0.5, 0),
        // textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        // background: theme.palette.primary.light,
        padding: theme.spacing(0.5, 0),
        '& > *': {
            textTransform: 'none',
            fontSize: '12px',
            // margin: theme.spacing(0.25, 1)
        }
    },
}));


export default Editor;