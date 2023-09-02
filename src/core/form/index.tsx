/** @format */

import { Box } from '@mui/material';
import React from 'react';

interface IForm {
    onSubmit: (dataItem: any) => void;
    children: React.ReactNode;
    filed: string[];
}

const From: React.FC<IForm> = ({ onSubmit, children, filed }) => {
    return (
        <form
            method="GET"
            encType="multipart/form-data"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const values = filed.map((item) => {
                    return [item, formData.get(item)];
                });
                onSubmit(Object.fromEntries(values));
            }}
        >
            <Box className="flex flex-col">{children}</Box>
        </form>
    );
};

export default From;
