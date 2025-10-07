import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Page | next-mdx-spike-01',
};

export default function MyPage() {
  return (
    <div className='space-y-4'>
      <p>
        This page is linked to by an internal link, for demo purposes.
      </p>
      <p>
        <Link
          href='/'
          className='text-blue-600 hover:underline'
        >Return to Home Page</Link>
      </p>
    </div>
  );
}
