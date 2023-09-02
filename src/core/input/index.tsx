/** @format */

import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export interface IInputRoot extends Omit<TextFieldProps, 'variant'> {
    name: string;
}

const InputRoot: React.FC<IInputRoot> = ({ name, ...props }) => {
    return <TextField {...props} name={name} />;
};

export default InputRoot;
