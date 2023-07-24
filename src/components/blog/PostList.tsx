import { BlogList } from '@/types/blog';
import { link } from 'fs';
import Link from 'next/link';
import React from 'react';

interface Props {
    posts: BlogList;
}

export default function PostLists({ posts }: BlogList) {
    const items = posts.map((item, idx) => (
        <li className='my-4 text-lg'>
            <Link href={`/posts/${item.slug}`}>{item.title}</Link>
        </li>
    ));

    return (
        <section>
            <ul>{items}</ul>
        </section>
    );
}
