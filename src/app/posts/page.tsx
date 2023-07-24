import PostLists from '@/components/blog/PostList';
import React from 'react';

const posts = [
    { title: 'Post No.1', slug: 'the-first-post' },
    { title: 'Post No.2', slug: 'something-about-an-interesting-topic' },
    { title: 'Post No.3', slug: 'we-will-never-know' },
];

export default function BlogListPage() {
    return (
        <div id='posts'>
            <div className='bg-white px-6 py-32 lg:px-8'>
                <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                    <PostLists posts={posts}></PostLists>
                </div>
            </div>
        </div>
    );
}
