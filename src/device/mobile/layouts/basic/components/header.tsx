/** @format */

import { Avatar, Box, IconButton } from '@mui/material';
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';

const HeaderComponents = () => {
    return (
        <Box className="flex items-center justify-between p-4">
            <IconButton>
                <BiChevronLeft className="text-black" />
            </IconButton>
            <Avatar
                sx={{
                    width: 50,
                    height: 50,
                }}
                src="https://i.pinimg.com/236x/b7/93/2d/b7932d6f6c4e6e6d9e0fc94cdfd8c2bc.jpg"
            />
        </Box>
    );
};

export default HeaderComponents;
