import React, {useState} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReplyIcon from "@material-ui/icons/Reply";

import Bullet from "../Shared/Bullet";
import Editor from "../Shared/Editor";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const Comment = ({classes, comment}) => {
    const [openEditor, setOpenEditor] = useState(false);
    const [checked, setChecked] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [commentList, setCommentList] = useState(comment);

    const handleCheckBoxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleEditorToggle = () => {
        setOpenEditor(!openEditor)
        setReplyText('')
    }


    const handleSendClick = () => {
        comment.children = comment.children || [];
        comment.children.push({id: 25, parentId: comment.id, text: replyText})

        setCommentList(comment)
        setOpenEditor(false)
    }

    const nestedComments = (commentList.children || []).map(comment => {
        return <Comment comment={comment} classes={classes} key={comment.id}/>;
    });

    const saveButtons = (
        <div className={classes.saveButtons}>
            <FormControlLabel
                value="end"
                control={<Checkbox checked={checked} onChange={handleCheckBoxChange}/>}
                label="gizli"
                labelPlacement="end"
            />
            {/*<ButtonGroup size='small'>*/}
            <Button
                onClick={() => {
                    setOpenEditor(false)
                    setReplyText('')
                }}
                variant='text'
                size='small'
            >
                bağla
            </Button>

            <Button onClick={handleSendClick} color='secondary' variant='contained' size='small'
                    disabled={!replyText.trim()}>
                göndər
            </Button>
            {/*</ButtonGroup>*/}
        </div>
    );


    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Avatar aria-label="recipe" className={classes.avatar}/>
                <Typography className={classes.title}>
                    kafkanın playboy jurnalları <Bullet/> September 14, 2016
                </Typography>
            </div>


            <CardContent
                className={classes.cardContent}
            >
                <Typography variant="body2" component="p">
                    {comment.text}
                </Typography>
            </CardContent>

            <div className={classes.actions}>
                <Tooltip title="əjdaha">
                    <IconButton>
                        <ArrowUpwardIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="umbay">
                    <IconButton>
                        <ArrowDownwardIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>

                <Bullet/>

                <Tooltip title="mesaj">
                    <IconButton onClick={handleEditorToggle}>
                        <ReplyIcon fontSize={'small'}/>
                    </IconButton>
                </Tooltip>
            </div>

            {openEditor && <Editor setText={setReplyText} actions={saveButtons}/>}

            {nestedComments}
        </div>
    );
};


const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderLeft: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1.5),
        },
    },
    header: {
        display: 'flex',
    },
    avatar: {
        width: theme.spacing(2.125),
        height: theme.spacing(2.125),
    },
    title: {
        fontSize: '13px',
        marginLeft: theme.spacing(1),
        fontWeight: 600,
    },
    cardHeader: {
        padding: theme.spacing(1, 0),
    },
    cardContent: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 0),
        },
    },
    actions: {},
    saveButtons: {
        textAlign: 'right',
        '& > :not(:first-child):not(:last-child)': {
            marginRight: theme.spacing(0.5)
        },
    },
});


export default withStyles(styles)(Comment);