import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import Chip from "@material-ui/core/Chip";

const PageTitle = ({classes}) => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        // { key: 5, label: 'Javascript' },
    ]);

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
            {chipData.map((data) => {
                return (
                    <li key={data.key}>
                        <Chip
                            size='small'
                            label={data.label}
                            className={classes.chip}
                            onClick={handleClick}
                            variant='outlined'
                        />
                    </li>
                );
            })}
        </div>
    );
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0),
        margin: theme.spacing(0.5, 0),
    },
    chip: {
        margin: theme.spacing(0.5, 0.5, 0.5, 0),

    },
});

export default withStyles(styles)(PageTitle);