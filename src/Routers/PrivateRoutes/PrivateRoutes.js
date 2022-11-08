import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LoadingSpinner from '../../Pages/Shared/LoadingSpinner/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    // this condition is for holding phase untill the state came.
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    //if the user not found or logged in will redirect to login page.
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></ Navigate>
    }
    return children
};

export default PrivateRoutes;