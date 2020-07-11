import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

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
            parentId: null,
            text: "My son was a bully.\n" +
                "\n" +
                "1st grade I started getting noticed from his teacher that he was throwing sand at girls and stabbing people with a pencil. I talked to him and he had crazy first grade reasons like \"she was being mean first\". I told him it's not cool and to knock it off.\n" +
                "\n" +
                "Every teacher meeting I would tell them to let me know and I'll punish him.\n" +
                "\n" +
                "Second grade. I meet the teacher. I warn her that I think he's a bully and to watch him. Same shit starts happening. But now hes being mean to specific people. Anyone that can't run fast etc. I'm thinking to myself... I cant watch him all the time, what do I do. At home I start punish him but it doesn't really do anything. All teacher conferences main agenda is bullying.\n" +
                "\n" +
                "Third grade. I meet the teacher and warn her we have a bully on our hands. Same crap happens. I'm reading a book on the subject and I read a passage that says if you call a kid a bully he lives up to the role. Hmmmm let the experiment begin.\n" +
                "\n" +
                "From that day I stopped calling him a bully and started saying things like \"your going to help your teacher today right? You are a good boy. Make me proud by being a helper\". Almost night and day. The calls stopped. The next teacher conference, the teacher said how helpful he was.\n" +
                "\n" +
                "Hes in 8the grade now. No bully calls. I make him do volunteer work weekly just in case. He still does crazy crap like attacking kids that are mean to girls but no bullying.\n" +
                "\n" +
                "I don't know if I caught it in time or if my kid just needed coaching but it worked."
        },
        {
            id: 2,
            parentId: 1,
            text: "It’s called a self-fulfilling prophecy and happens a lot with kids. You believe that he’s a bully and people tell him he is and soon he believes it and feels like he can’t change.\n" +
                "\n" +
                "Edited to change typo."
        },
        {
            id: 13,
            parentId: 1,
            text: "Happens with adults too. Especially if the person who is negatively defining/stereotyping you is someone you look up to."
        },
        {
            id: 3,
            parentId: 1,
            text: "I hope self-fulfilling prophecies don't apply to usernames though...\n" +
                "\n" +
                "y'know...\n" +
                "\n" +
                "for your sake."
        },
        {
            id: 4,
            parentId: 3,
            text: "They apply to my username"
        },
        {
            id: 5,
            parentId: 4,
            text: "Heh, like a funnel"
        },
        {
            id: 6,
            parentId: null,
            text: "He went from chaotic neutral to chaotic good lmao\n" +
                "\n" +
                "Edit: to those calling \"simp\", consider the following:\n" +
                "\n" +
                "Men advocate \"bro code\", which is when guys help each other out of brotherhood and camraderie. but a man who does the exact same thing as bro code but for a woman is a simp. Why treat people differently based on gender? Its just bigotry. Cant we all just help each other and value human life and suffering equally regardless of the gender of the person experiencing it?"
        },
        {
            id: 7,
            parentId: 5,
            text: "\"I'm being a helper\"\n" +
                "\n" +
                "breaks kids jaw for being mean to girls"
        },
        {
            id: 8,
            parentId: 7,
            text: "Before, he was a bullying little shit. Today he uses his powers to rid the world of evil. Helperman."
        },
        {
            id: 9,
            parentId: null,
            text: "Several answers here are along the lines of “one of the things that makes a bully is lack of attention”. My parents love me more than life itself, and yet I was still a bully in my elementary years. I couldn’t tell you why exactly, other than just saying ‘autism’, which is no excuse. My parents did not allow the teachers to use that as an excuse, and made sure I was appropriately punished. And I am so grateful for that.\n" +
                "\n" +
                "Anyway, most autistic children have the one thing they obsess over. For me, it was Garfield the cat. Every phone call from the principal, one Garfield thing was taken away, and it broke my parents’ hearts, but it worked.\n" +
                "\n" +
                "Edit: I consulted my mother to see if she had any insight as to the reason. Best guess is lack of regard for other people’s feelings.\n" +
                "\n" +
                "Edit 2: please stop recommending r/Imsorryjon to me. If I wanted to ruin my childhood, I’d already be subscribed to that subreddit."
        },
        {
            id: 10,
            parentId: 9,
            text: "I have a disorder on the autism spectrum called Aspergers. I too have something I obsess over, which is coins. Idk why."
        },
        {
            id: 11,
            parentId: 8,
            text: "Mine was rocks. When my parents took me to restaurants I'd spend the last 20-30 minutes looking through the rock beds for good ones. Probably collected a thousand by the time I got to High School."
        },
        {
            id: 12,
            parentId: 11,
            text: "That honestly sounds like a pretty amazing rock."
        },
    ];


    const nestedComments = nestComments(comments).map(comment => {
        return <Comment comment={comment} key={comment.id}/>;
    });

    return (
        <Card className={classes.root} variant='outlined'>
            <PostCard data={data}/>

            {/*<TextField*/}
            {/*    id="outlined-multiline-static"*/}
            {/*    label="adam balası kimi məsləhət ver.."*/}
            {/*    multiline*/}
            {/*    rows={4}*/}
            {/*    variant="outlined"*/}
            {/*    fullWidth*/}
            {/*    placeholder='Some text here'*/}
            {/*/>*/}

            <Divider/>

            {nestedComments}
        </Card>
    );
};


const styles = theme => ({
    root: {
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
});


export default withStyles(styles)(ContentCard);