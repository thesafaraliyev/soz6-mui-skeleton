import React, {useState} from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import Editor from "../Shared/Editor";


const MainComment = ({classes, commentList, setCommentList}) => {
    const [replyText, setReplyText] = useState('');

    // console.log(commentList)
    // console.log(setCommentList)


    const handleSendClick = () => {
        // console.log(commentList.push())
        // console.log(commentList.data)

        // commentList.unshift([{id: 27, parentId: null, text: replyText}])
        // console.log(commentList)

        // const a = commentList
        commentList.unshift({id: 25, parentId: null, text: replyText});
        console.log([...commentList])
        setCommentList([...commentList]);
    }


    const saveButtons = (
        <div className={classes.saveButtons}>
            <Button onClick={handleSendClick} color='secondary' variant='contained' size='small'
                    disabled={!replyText.trim()}>
                göndər
            </Button>
        </div>
    );


    return (
        <Editor actions={saveButtons} setText={setReplyText}/>
    );
};


const styles = theme => ({
    root: {},
    saveButtons: {
        textAlign: 'right',
        '& > :not(:first-child):not(:last-child)': {
            marginRight: theme.spacing(0.5)
        },
    },
});


export default withStyles(styles)(MainComment);