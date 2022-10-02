import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//wrapper component that handles scroll restoration on route change

const ResetScroll = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
}

export default ResetScroll