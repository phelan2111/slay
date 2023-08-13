/** @format */

import React from 'react';
export interface I_ProtectedRoute {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<I_ProtectedRoute> = ({ children }) => {
    return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
