/** @format */

import { Box } from '@mui/material';
import React from 'react';

interface IBasicLayout {
    children: React.ReactNode;
}

const BasicLayout: React.FC<IBasicLayout> = ({ children }) => {
    return (
        <Box
            className={
                'bg-kyc-mobile bg-cover bg-center bg-no-repeat flex justify-center items-center layoutM_height p-4'
            }
        >
            <Box className="p-8 rounded-lg relative">
                <Box className="backdrop-blur-md w-full h-full absolute top-0 right-0"></Box>
                <Box>{children}</Box>
            </Box>
        </Box>
    );
};

export default BasicLayout;
