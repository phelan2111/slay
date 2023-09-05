/** @format */

import { Box } from '@mui/material';
import React from 'react';
import './_index.scss';

const LoadingPage = () => {
    return (
        <Box className="loadingComp flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600">
            <Box className="container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </Box>
        </Box>
    );
};

export default LoadingPage;
