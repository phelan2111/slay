/** @format */

import { Backdrop, Box } from '@mui/material';
import React, { useEffect } from 'react';

type TActionBackDrop = {
    open: boolean;
    children: React.ReactNode;
    onReset: () => void;
};
const ActionBackDrop: React.FC<TActionBackDrop> = ({ open, children, onReset }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    });

    return (
        <Backdrop
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
            }}
            onClick={onReset}
            className="z-10"
            open={open}
        >
            <Box className="bg-white w-full animation-tranFromY">{children}</Box>
        </Backdrop>
    );
};

export default ActionBackDrop;
