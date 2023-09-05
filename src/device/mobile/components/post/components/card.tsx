/** @format */

import {
    Avatar,
    AvatarGroup,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
} from '@mui/material';
import React from 'react';
import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';

const CardPost = () => {
    return (
        <Box className="dark:bg-dark bg-white text-black">
            <Card
                sx={{
                    boxShadow: 'none',
                    background: 'transparent',
                    color: 'inherit',
                }}
            >
                <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    action={
                        <IconButton aria-label="settings">
                            <BsThreeDotsVertical className="text-black" />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={<span className="text-black">September 14, 2016</span>}
                />
                <CardContent
                    sx={{
                        padding: '16px',
                        paddingTop: 0,
                    }}
                >
                    Má nó, trông nó vui kìa =))) Trường hợp hy hữu bị cấm bay suốt đời mà
                    mừng tới như vậy =))))
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{
                        height: '300px',
                        objectFit: 'cover',
                    }}
                    image="https://i.pinimg.com/564x/8b/0b/6e/8b0b6ec260a4c1d2b3e579f96590bb7f.jpg"
                    alt="Paella dish"
                />
                <CardContent
                    sx={{
                        padding: '16px 16px 0px 16px',
                    }}
                >
                    <section className="flex justify-between">
                        <article className="flex gap-2 items-center">
                            <AvatarGroup max={2}>
                                <Avatar
                                    sx={{
                                        width: 25,
                                        height: 25,
                                    }}
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                />
                                <Avatar
                                    sx={{
                                        width: 25,
                                        height: 25,
                                    }}
                                    alt="Temy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </AvatarGroup>
                            <span className="text-sm">9.6k</span>
                        </article>
                        <article className="flex gap-1 items-center text-sm">
                            <span>390 comment</span>
                            <BsDot />
                            <span>128 share</span>
                        </article>
                    </section>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <AiOutlineLike className="text-black" />
                    </IconButton>
                    <IconButton>
                        <AiOutlineComment className="text-black" />
                    </IconButton>
                    <IconButton>
                        <AiOutlineShareAlt className="text-black" />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export default CardPost;
