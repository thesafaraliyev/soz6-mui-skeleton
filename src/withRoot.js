import React from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: blue[500],
            // main: blue[500],
            // dark: blue[900]
            light: '#484848',
            main: '#282828',
            dark: '#282828',
            contrastText: '#ffffff',
        },
        secondary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700]
        }
    },
    typography: {
        useNextVariants: true
    }
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
                <CssBaseline/>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;