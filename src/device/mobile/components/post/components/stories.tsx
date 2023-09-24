/** @format */

import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { stories } from 'data/stories';

const ItemYourStory = () => {
    return (
        <Box className="flex flex-col gap-1 justify-center items-center relative">
            <Avatar
                sx={{
                    width: 80,
                    height: 80,
                }}
                src="https://i.pinimg.com/564x/30/93/b1/3093b1d81521f4b3ee75a965745ea2d4.jpg"
            />
            <Typography fontSize={14}>Your story</Typography>
            <Box className="absolute -right-3 bottom-7 bg-white p-1 rounded-full">
                <BsFillPlusCircleFill className="text-2xl text-sky-500" />
            </Box>
        </Box>
    );
};

export interface IStories {
    info: {
        name: string;
        url: string;
        id: string;
    };
}

const ItemStories: React.FC<IStories> = ({ info }) => {
    return (
        <Box className="flex flex-col gap-1 justify-center items-center relative">
            <Box
                sx={{ padding: '2px' }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            >
                <Avatar
                    sx={{
                        width: 80,
                        height: 80,
                    }}
                    className="border-4 border-white"
                    src={info.url}
                />
            </Box>
            <Typography fontSize={14}>{info.name}</Typography>
        </Box>
    );
};

const StoriesComponent = () => {
    return (
        <Box className="flex gap-5 overflow-x-auto scroll-hidden">
            <ItemYourStory />
            {stories.map((item, index) => (
                <ItemStories info={item} key={StoriesComponent.name + index.toString()} />
            ))}
        </Box>
    );
};

export default StoriesComponent;
