import {useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollIntoView = ({children, location}) => {
    const prevLocation = useRef();

    useEffect(() => {
        if (prevLocation.current !== location.pathname) {
            // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            window.scrollTo({top: 0, left: 0});
            prevLocation.current = location.pathname;
        }
    }, [location]);

    return children;
};

ScrollIntoView.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
};

export default withRouter(ScrollIntoView);