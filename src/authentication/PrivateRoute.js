import React from 'react';
import {Navigate, useLocation, Outlet} from "react-router-dom"

const PrivateRoute = () => {
    const user = true;
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{from: location }} replace />
    }

    return <Outlet/> ;

};

export default PrivateRoute;