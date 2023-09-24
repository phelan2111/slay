/** @format */

import React from 'react';
import CardPost from './components/card';
import StoriesComponent from './components/stories';

const PostComponent = () => {
    return (
        <section className="flex flex-col">
            <article className="bg-white p-4 flex gap-4">
                <StoriesComponent />
            </article>
            <article className="flex flex-col">
                <CardPost />
            </article>
        </section>
    );
};

export default PostComponent;
