/** @format */

import {
    Avatar,
    AvatarGroup,
    Box,
    FormControl,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';
import {
    AiOutlineCamera,
    AiOutlineFileGif,
    AiOutlineLike,
    AiOutlineMeh,
    AiOutlineSend,
} from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

const CommentItem = () => {
    return (
        <Box>
            <Box className="flex gap-2">
                <Avatar src="https://i.pinimg.com/236x/44/73/2f/44732f3e0db05de6d409ded8def6c5df.jpg" />
                <Box>
                    <Box className="bg-slate-100 p-3 rounded-md">
                        <Typography fontWeight={'600'}>Khang Pham</Typography>
                        <Typography>I like what you are thinking</Typography>
                    </Box>
                    <Box className="flex items-center gap-4">
                        <Typography fontSize={'14px'}>29m</Typography>
                        <Typography fontSize={'14px'} className="text-black lowercase">
                            Like
                        </Typography>
                        <Typography fontSize={'14px'} className="text-black lowercase">
                            Reply
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const CommentInteracts = () => {
    return (
        <Box className="flex justify-between">
            <Box className="flex justify-start items-center gap-2">
                <AvatarGroup
                    sx={{
                        '.MuiAvatar-root': {
                            width: 25,
                            height: 25,
                            border: '1px solid #B9B4C7',
                        },
                    }}
                    max={2}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={
                            'https://i.pinimg.com/236x/76/1e/4e/761e4e53c11d254fbd67b5211c5316ba.jpg'
                        }
                    />
                    <Avatar
                        alt="Remy Sharp"
                        src={
                            'https://i.pinimg.com/236x/21/b6/f9/21b6f9ac6bbf9e55768ea530a5a4c8af.jpg'
                        }
                    />
                </AvatarGroup>
                <Box>4.2K</Box>
                <IconButton>
                    <FiChevronRight />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <AiOutlineLike />
                </IconButton>
            </Box>
        </Box>
    );
};

const CommentTool = () => {
    return (
        <Box className="fixed bottom-0 right-0 w-full px-4 py-2 flex flex-col gap-2">
            <TextField className="w-full" />
            <Box className="flex justify-between">
                <Box>
                    <IconButton>
                        <AiOutlineCamera />
                    </IconButton>
                    <IconButton>
                        <AiOutlineFileGif />
                    </IconButton>
                    <IconButton>
                        <AiOutlineMeh />
                    </IconButton>
                </Box>
                <IconButton>
                    <AiOutlineSend />
                </IconButton>
            </Box>
        </Box>
    );
};

const CommentComponent = () => {
    return (
        <Box
            sx={{
                minHeight: 'calc(100dvh - 60px)',
            }}
            className="p-4 flex flex-col gap-4 w-full"
        >
            <FormControl>
                <CommentInteracts />
                <CommentItem />
                <CommentTool />
            </FormControl>
        </Box>
    );
};

export default CommentComponent;
