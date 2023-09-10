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
import { posts } from 'data/post';
import Localize from 'localize';
import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';
import Slider, { Settings } from 'react-slick';
import { CheckComment, EqualTwoNumber } from 'utils/helper';
import CommentComponent from './actions/comment';
import ExtendComponent from './actions/extend';
import ShareComponent from './actions/share';
import ActionBackDrop from './action';

type TInteraction = {
    avatar: string;
    name: string;
    id: string;
};

type TComment = {
    avatar: string;
    name: string;
    id: string;
    comment: string;
    idParentComment?: string;
    interaction: TInteraction[];
};

export type TItemPost = {
    id: string;
    avatar: string;
    name: string;
    images: string[];
    interactions: {
        list: TInteraction[];
        total: number;
    };
    caption: string;
    comment: {
        total: number;
        list: TComment[];
    };
};

export interface ICardPost {
    info: TItemPost;
}

const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

enum ACTION {
    NULL = 0,
    COMMENT,
    SHARE,
    EXTEND,
}

type TState = {
    action: ACTION;
};

const initialState: TState = {
    action: ACTION.NULL,
};

type TActionComponent = {
    action: ACTION;
    onReset: () => void;
};
const ActionComponent = ({ action, ...props }: TActionComponent) => {
    switch (action) {
        case ACTION.COMMENT:
            return (
                <ActionBackDrop {...props} open={EqualTwoNumber(action, ACTION.COMMENT)}>
                    <CommentComponent />
                </ActionBackDrop>
            );
        case ACTION.EXTEND:
            return (
                <ActionBackDrop {...props} open={EqualTwoNumber(action, ACTION.EXTEND)}>
                    <ExtendComponent />
                </ActionBackDrop>
            );
        case ACTION.SHARE:
            return (
                <ActionBackDrop {...props} open={EqualTwoNumber(action, ACTION.SHARE)}>
                    <ShareComponent />
                </ActionBackDrop>
            );
        default:
            return <React.Fragment></React.Fragment>;
    }
};

const CardPost = () => {
    const [state, setState] = useState<TState>(initialState);

    const onOpenComment = () => {
        setState({ action: ACTION.COMMENT });
    };
    const onOpenExtend = () => {
        setState({ action: ACTION.EXTEND });
    };
    const onOpenShare = () => {
        setState({ action: ACTION.SHARE });
    };
    const onReset = () => {
        setState({ action: ACTION.NULL });
    };

    return (
        <React.Fragment>
            {posts.map((item, index) => {
                return (
                    <Box
                        key={CardPost.name + index.toString()}
                        className="dark:bg-dark bg-white text-black border-t"
                    >
                        <Card
                            sx={{
                                boxShadow: 'none',
                                background: 'transparent',
                                color: 'inherit',
                            }}
                        >
                            <CardHeader
                                avatar={<Avatar src={item.avatar} aria-label="recipe" />}
                                action={
                                    <IconButton
                                        onClick={onOpenExtend}
                                        aria-label="settings"
                                    >
                                        <BsThreeDotsVertical className="text-black" />
                                    </IconButton>
                                }
                                title={item.name}
                                subheader={
                                    <span className="text-black">September 14, 2016</span>
                                }
                            />
                            <CardContent
                                sx={{
                                    padding: '16px',
                                    paddingTop: 0,
                                }}
                            >
                                {item.caption}
                            </CardContent>
                            <Box className="pb-4">
                                <Slider {...settings}>
                                    {item.images.map((image, index) => {
                                        return (
                                            <div
                                                className="bg-gray-200"
                                                key={
                                                    CardPost.name +
                                                    '-image-' +
                                                    index.toString()
                                                }
                                            >
                                                <CardMedia
                                                    component="img"
                                                    sx={{
                                                        height: '300px',
                                                        objectFit: 'contain',
                                                    }}
                                                    src={image}
                                                    alt="Paella dish"
                                                />
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </Box>
                            <CardContent
                                sx={{
                                    padding: '16px 16px 0px 16px',
                                }}
                            >
                                <section className="flex justify-between">
                                    <article className="flex gap-2 items-center">
                                        <AvatarGroup
                                            sx={{
                                                '.MuiAvatar-root': {
                                                    width: 25,
                                                    height: 25,
                                                    border: '1px solid #B9B4C7',
                                                },
                                            }}
                                            max={3}
                                        >
                                            {item.interactions.list.map(
                                                (interaction, index) => {
                                                    return (
                                                        <Avatar
                                                            key={
                                                                'AvatarGroup' +
                                                                index.toString()
                                                            }
                                                            alt="Remy Sharp"
                                                            src={interaction.avatar}
                                                        />
                                                    );
                                                }
                                            )}
                                        </AvatarGroup>
                                        <span className="text-sm">
                                            {CheckComment(item.comment.total)}
                                        </span>
                                    </article>
                                    <article className="flex gap-1 items-center text-sm">
                                        <span>{item.comment.total} comment</span>
                                        <BsDot />
                                        <span>0 share</span>
                                    </article>
                                </section>
                            </CardContent>
                            <CardActions>
                                <Box className="grid grid-cols-3 w-full border-t">
                                    <Box className="flex gap-2 items-center justify-center">
                                        <IconButton>
                                            <AiOutlineLike className="text-black" />
                                        </IconButton>
                                        <Localize til="like" />
                                    </Box>
                                    <Box className="flex gap-2 items-center justify-center">
                                        <IconButton onClick={onOpenComment}>
                                            <AiOutlineComment className="text-black" />
                                        </IconButton>
                                        <Box>
                                            <Localize til="comment" />
                                        </Box>
                                    </Box>
                                    <Box className="flex gap-2 items-center justify-center">
                                        <IconButton onClick={onOpenShare}>
                                            <AiOutlineShareAlt className="text-black" />
                                        </IconButton>
                                        <Localize til="share" />
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                );
            })}
            <ActionComponent onReset={onReset} action={state.action} />
        </React.Fragment>
    );
};

export default CardPost;
