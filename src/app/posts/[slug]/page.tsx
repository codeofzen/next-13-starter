import React from 'react';
import { notFound } from 'next/navigation';

import { BlogPost } from '@/types/blog';
import Post from '@/components/blog/Post';

interface Params {
    params: {
        slug: string;
    };
}

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const slug = params.slug;
    const post = await getPost(slug);

    if (post !== null) {
        return (
            <div id='post'>
                <div className='bg-white px-6 py-32 lg:px-8'>
                    <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
                        <Post post={post}></Post>
                    </div>
                </div>
            </div>
        );
    }

    return notFound();
}

async function getPost(slug: string): Promise<BlogPost | null> {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`);

    if (res.ok) {
        const data = await res.json();
        return data;
    }
    return null;
}
