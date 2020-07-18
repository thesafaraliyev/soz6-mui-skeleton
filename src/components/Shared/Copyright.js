import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Link as ReactLink} from "react-router-dom";
import React from "react";


export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {/*{'Copyright © '}*/}
            {'heç bir haqqımız qorunmur, bütün hüquqlar vəhşicəsinə pozulur © '}
            <Link
                color="inherit"
                component={ReactLink}
                to={'/'}
            >
                Epic Sözlük
            </Link>{' '}
            {new Date().getFullYear() + 11}
            {'.'}
        </Typography>
    );
}