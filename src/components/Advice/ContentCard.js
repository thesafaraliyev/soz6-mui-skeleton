import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

import PostCard from "../../components/Advice/PostCard";
import Comment from "../../components/Advice/Comment";

function nestComments(commentList) {
    const commentMap = {};

    // move all the comments into a map of id => comment
    commentList.forEach(comment => commentMap[comment.id] = comment);

    // iterate over the comments again and correctly nest the children
    commentList.forEach(comment => {
        if(comment.parentId !== null) {
            const parent = commentMap[comment.parentId];
            (parent.children = parent.children || []).push(comment);
        }
    });

    // filter the list to return a list of correctly nested comments
    return commentList.filter(comment => {
        return comment.parentId === null;
    });
}



const ContentCard = ({classes, data}) => {
    const comments = [
        {
            id: 1,
            parentId: null
        },
        {
            id: 2,
            parentId: 1
        },
        {
            id: 3,
            parentId: 1
        },
        {
            id: 4,
            parentId: 3
        },
        {
            id: 5,
            parentId: 4
        },
        {
            id: 6,
            parentId: null
        },
        {
            id: 7,
            parentId: 5
        },
        {
            id: 8,
            parentId: 7
        },
        {
            id: 9,
            parentId: null
        },
        {
            id: 10,
            parentId: 9
        },
    ];


    const nestedComments = nestComments(comments).map(comment => {
        return <Comment comment={comment} />;
    });

    return (
        <>
            <PostCard data={data}/>

            {nestedComments}
        </>
    );
};


const styles = theme => ({

});


export default withStyles(styles)(ContentCard);