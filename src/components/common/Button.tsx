import React from 'react';

interface Props {
    href: string;
    children: React.ReactNode;
}

export default function Button({ href, children }: Props) {
    return (
        <a
            href={href}
            type='button'
            className='rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800'
        >
            {children}
        </a>
    );
}
