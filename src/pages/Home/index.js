import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

                <Typography variant="h6" className={classes.headerText}>
                    bugün ən çox əjdahalanmış entrylər:
                </Typography>

                <ContentCard/>
                <ContentCard/>
            </main>
        </>
    );
};


const styles = theme => ({
    headerText: {
        marginBottom: theme.spacing(1),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1, 2),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 1),
            marginBottom: theme.spacing(10)
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '55%',
        }
    },
});


export default withStyles(styles)(Home);