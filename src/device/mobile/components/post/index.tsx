/** @format */

import React from 'react';
import CardPost from './components/card';
import { Avatar } from '@mui/material';

const PostComponent = () => {
    return (
        <section className="flex flex-col gap-4 py-4">
            <article className="bg-white p-4 flex gap-4">
                <Avatar
                    sx={{
                        width: 50,
                        height: 50,
                    }}
                    src="https://i.pinimg.com/236x/f8/da/39/f8da396683b4d42c9b2caa679c961b43.jpg"
                />
                <input
                    className="outline-none bg-transparent"
                    placeholder="What's on your mind"
                />
            </article>
            <article className="flex flex-col gap-4">
                <CardPost />
                <CardPost />
            </article>
        </section>
    );
};

export default PostComponent;
