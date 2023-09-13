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
        if (open) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    },[open]);

    return (
        <React.Fragment>
            <Backdrop
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    zIndex: '10'
                }}
                onClick={onReset}
                className="z-10"
                open={open}
            >
            </Backdrop>
                <Box
                key={`${open}`}
                className="bg-white w-full animation-tranFromY fixed bottom-0 right-0 z-20"
            >
                {children}
            </Box>
            
        </React.Fragment>
    );
};

export default ActionBackDrop;
