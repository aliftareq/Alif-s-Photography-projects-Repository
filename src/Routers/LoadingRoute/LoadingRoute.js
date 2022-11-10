import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LoadingSpinner from '../../Pages/Shared/LoadingSpinner/LoadingSpinner';

const LoadingRoute = ({ children }) => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return children
};

export default LoadingRoute;