export type BlogPost = {
    title: string;
    content: string;
};

export type BlogListItem = {
    title: string;
    slug: string;
};

export type BlogList = {
    posts: BlogListItem[];
};
