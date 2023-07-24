import Button from '@/components/common/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Button href='/posts'>Go to Blog</Button>
        </main>
    );
}
