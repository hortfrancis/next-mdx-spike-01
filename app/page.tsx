import Hello from '@/content/hello.mdx';

export default function Home() {
  return (
    <div className='p-10 font-sans'>
      <header>
        <h1 className='text-2xl font-bold pb-2 border-b'>
          next-mdx-spike-01
        </h1>
      </header>
      <main className='content-from-markdown pt-6'>
        <div
          className='space-y-4'
        >
          <Hello />
        </div>
      </main>
      <footer>
      </footer>
    </div >
  );
}
