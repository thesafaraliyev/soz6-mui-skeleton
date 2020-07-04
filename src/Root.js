import React from 'react';
import 'fontsource-roboto';

import withRoot from "./withRoot";
import Base from './pages/index';

function Root() {
    return (
        <div className="App">
            <Base/>
        </div>

    );
}

export default withRoot(Root);
