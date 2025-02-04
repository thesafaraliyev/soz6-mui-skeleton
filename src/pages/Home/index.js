import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import LeftSide from "../../components/Navigation/LeftSide";
import ContentCard from "../../components/Home/ContentCard";


export const LEFT_SIDE_CONTENT = [
    {
        id: 1,
        title: 'azərbaycansayağı türkcə',
        slug: 'azerbaycansayagi-turkce',
        count: 3,
    },
    {
        id: 2,
        title: 'beyin yeyən amöb',
        slug: 'beyin-yeyen-amob',
        count: 0,
    },
    {
        id: 3,
        title: '6 iyul 2020 bakıda xoşagəlməz iyin yayılması',
        slug: '6-iyul-2020-bakida-xosagelmez-iyin-yayilmasi',
        count: 4,
    },
    {
        id: 4,
        title: 'central park jogger case',
        slug: 'central-park-jogger-case',
        count: 0,
    },
    {
        id: 5,
        title: 'sabunçu xəstəxanasının biabırçı vəziyyəti',
        slug: 'sabuncu-xestexanasinin-biabirci-veziyyeti',
        count: 2,
    },
];
export const RIGHT_SIDE_CONTENT = [
    {
        id: 1,
        title: 'avropaya türkiye vasitesile gediş',
        slug: 'avropaya-turkiye-vasitesile-gedis',
        count: 3,
    },
    {
        id: 2,
        title: 'bunun kimi qafqaz folk musiqilər',
        slug: 'bunun-kimi-qafqaz-folk-musiqiler',
        count: 0,
    },
    {
        id: 3,
        title: 'souls-like oyunlar necə oynanılır?',
        slug: 'souls-like-oyunlar-nece-oynanilir',
        count: 4,
    },
    {
        id: 4,
        title: 'valyuta',
        slug: 'valyuta',
        count: 0,
    },
    {
        id: 5,
        title: 'walmart-dan noutbuk almaq',
        slug: 'walmart-dan-noutbuk-almaq',
        count: 2,
    },
];

const Home = ({classes}) => {

    return (
        <>
            {/* left */}
            <LeftSide content={LEFT_SIDE_CONTENT}/>


            {/* content here */}
            <main className={classes.content}>
                <Toolbar variant={'dense'}/>

                <Card variant='outlined' className={classes.pageHeader}>
                    <Typography variant="subtitle1">
                        bugün ən çox əjdahalanmış entrylər:
                    </Typography>
                </Card>


                <ContentCard/>
                <ContentCard/>
                <ContentCard/>
                <ContentCard/>
                <ContentCard/>
            </main>
        </>
    );
};


const styles = theme => ({
    pageHeader: {
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.5, 1),
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        '& > div:not(:first-child):not(:last-child)': {
            marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(7),
            '& > div:not(:first-child):not(:last-child)': {
                marginBottom: theme.spacing(1)
            },
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '55%',
        },
    },
});


export default withStyles(styles)(Home);