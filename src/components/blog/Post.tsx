import { BlogPost } from '@/types/blog';
import React from 'react';

interface Props {
    post: BlogPost;
}

export default function Post({ post }: Props) {
    return (
        <div>
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {post.title}
            </h1>
            <div className='mt-8'>
                <p>{post.content}</p>
            </div>
        </div>
    );
}
