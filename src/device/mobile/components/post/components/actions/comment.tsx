/** @format */

import { Avatar, AvatarGroup, Box, Button, FormControl, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineCamera, AiOutlineFileGif, AiOutlineMeh, AiOutlineSend } from 'react-icons/ai';

const CommentItem = () => {
    return <Box>
        <Avatar src='https://i.pinimg.com/236x/44/73/2f/44732f3e0db05de6d409ded8def6c5df.jpg' />
        <Box>
            <Typography>Khang Pham</Typography>
            <Typography>I like what you are thinking</Typography>
        </Box>
        <Box>
            <Typography>29m</Typography>
            <Button>Like</Button>
            <Button>Reply</Button>
        </Box>
    </Box>
}

const CommentComponent = () => {
    return (
        <FormControl>
            <Box className="py-4 flex flex-col gap-4">
            <Box>
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
                    <Avatar alt="Remy Sharp" src={'https://i.pinimg.com/236x/76/1e/4e/761e4e53c11d254fbd67b5211c5316ba.jpg'} />
                    <Avatar alt="Remy Sharp" src={'https://i.pinimg.com/236x/21/b6/f9/21b6f9ac6bbf9e55768ea530a5a4c8af.jpg'} />
                </AvatarGroup>
            </Box>
            <Box>
                <CommentItem />
            </Box>
            <Box>
                <TextField />
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
                <Box>
                    <AiOutlineSend />
                </Box>
            </Box></Box>
        </FormControl>
    );
};

export default CommentComponent;
