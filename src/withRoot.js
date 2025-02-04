import React from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#030303',
            paper: '#1A1A1B',
        },
        primary: {
            // light: blue[500],
            // main: blue[500],
            // dark: blue[900]
            // main: '#282828',
            // dark: '#282828',
            light: '#484848',
            main: '#1A1A1B',
            dark: '#ffffff',
            contrastText: '#ffffff',
        },
        secondary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700]
        },
        // text: {
        //     primary: '#fff',
        //     secondary: 'rgba(255, 255, 255, 0.7)',
        //     disabled: 'rgba(255, 255, 255, 0.5)',
        // },
        // action: {
        //     active: '#fff',
        //     hover: 'rgba(255, 255, 255, 0.08)',
        //     selected: 'rgba(255, 255, 255, 0.16)',
        //     disabled: 'rgba(255, 255, 255, 0.3)',
        //     disabledBackground: 'rgba(255, 255, 255, 0.12)',
        // },
        // divider: 'rgba(255, 255, 255, 0.12)',
        // https://material-ui.com/customization/palette/#dark-mode

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