import { BlogPost } from '@/types/blog';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    const post = posts.find((p) => p.slug === params.slug);
    if (post !== undefined) {
        const res: BlogPost = { title: post.title, content: post.content };
        return NextResponse.json(res);
    } else {
        return NextResponse.json(
            { message: `Slug ${params.slug} not found` },
            { status: 404 }
        );
    }
}

// demo data
const posts = [
    {
        title: 'Post No.1',
        slug: 'the-first-post',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, velit eget dignissim posuere, orci sapien condimentum sem, quis convallis lacus turpis euismod magna. Vestibulum tincidunt, neque ac gravida venenatis, est sapien vehicula leo, eget gravida sapien ex ac nunc. Nunc sit amet est in libero placerat mollis suscipit efficitur tellus. Duis finibus diam quis nibh maximus, id elementum sapien tincidunt. Fusce pharetra eros id rutrum finibus. Phasellus vitae sapien velit. Cras auctor mollis massa, sit amet tincidunt lorem pellentesque ut. Suspendisse potenti. Vestibulum quis nunc mattis leo commodo ornare non non nunc. Quisque at ligula dolor. Cras consequat sem ut mauris pharetra dictum. Quisque dui sem, mattis quis nulla sed, accumsan sagittis urna.',
    },
    {
        title: 'Post No.2',
        slug: 'something-about-an-interesting-topic',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, velit eget dignissim posuere, orci sapien condimentum sem, quis convallis lacus turpis euismod magna. Vestibulum tincidunt, neque ac gravida venenatis, est sapien vehicula leo, eget gravida sapien ex ac nunc. Nunc sit amet est in libero placerat mollis suscipit efficitur tellus. Duis finibus diam quis nibh maximus, id elementum sapien tincidunt. Fusce pharetra eros id rutrum finibus. Phasellus vitae sapien velit. Cras auctor mollis massa, sit amet tincidunt lorem pellentesque ut. Suspendisse potenti. Vestibulum quis nunc mattis leo commodo ornare non non nunc. Quisque at ligula dolor. Cras consequat sem ut mauris pharetra dictum. Quisque dui sem, mattis quis nulla sed, accumsan sagittis urna.',
    },
    {
        title: 'Post No.3',
        slug: 'we-will-never-know',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, velit eget dignissim posuere, orci sapien condimentum sem, quis convallis lacus turpis euismod magna. Vestibulum tincidunt, neque ac gravida venenatis, est sapien vehicula leo, eget gravida sapien ex ac nunc. Nunc sit amet est in libero placerat mollis suscipit efficitur tellus. Duis finibus diam quis nibh maximus, id elementum sapien tincidunt. Fusce pharetra eros id rutrum finibus. Phasellus vitae sapien velit. Cras auctor mollis massa, sit amet tincidunt lorem pellentesque ut. Suspendisse potenti. Vestibulum quis nunc mattis leo commodo ornare non non nunc. Quisque at ligula dolor. Cras consequat sem ut mauris pharetra dictum. Quisque dui sem, mattis quis nulla sed, accumsan sagittis urna.',
    },
];
