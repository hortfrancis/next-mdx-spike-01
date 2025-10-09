import Hello from '@/content/hello.mdx';

export default function Home() {
  return (
    <div
      className='content-from-markdown space-y-4'
    >
      <Hello />
    </div>
  );
}
