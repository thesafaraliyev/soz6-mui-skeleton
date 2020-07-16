import orange from "@material-ui/core/colors/orange";
import blue from "@material-ui/core/colors/blue";

export const dark = {
    palette: {
        type: 'dark',
        background: {
            default: '#030303',
            paper: '#1A1A1B',
        },
        primary: {
            // light: '#484848',
            // main: '#1A1A1B',
            // dark: '#ffffff',
            // contrastText: '#ffffff',

            // light: '#484848',
            // main: '#1A1A1B',
            // dark: '#000000',

            light: '#444444',
            main: '#1A1A1B',
            dark: '#111111',
            contrastText: '#fff',
        },
        secondary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700]
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
        },
        action: {
            active: '#fff',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        // https://material-ui.com/customization/palette/#dark-mode

    },
    typography: {
        useNextVariants: true
    }
};

export const light = {
    palette: {
        type: 'light',
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        primary: {
            // light: '#484848',
            main: '#1A1A1B',
            // dark: '#000000',
        },
        secondary: {
            light: orange[300],
            main: orange[500],
            dark: orange[700]
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: {
        useNextVariants: true
    }
};