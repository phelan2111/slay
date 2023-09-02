/** @format */

import { TextField } from '@mui/material';
import { IInputRoot } from 'core/input';
import React from 'react';

const color = {
    primary: '#78C1F3',
    primaryFocus: '#91C8E4',
};

const InputKYC: React.FC<IInputRoot> = ({ name, ...props }) => {
    return (
        <TextField
            variant="filled"
            InputProps={{
                sx: {
                    ':before': {
                        borderColor: color.primary,
                    },
                    ':after': {
                        borderColor: color.primaryFocus,
                    },
                    color: 'white',
                },
            }}
            sx={{
                '.MuiInputLabel-root': {
                    color: color.primary,
                    fontSize: '13px',
                },
                '.MuiInputLabel-root.Mui-focused': {
                    color: color.primaryFocus,
                },
            }}
            name={name}
            {...props}
        />
    );
};

export default InputKYC;
