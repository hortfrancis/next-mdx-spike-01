import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  // return components;
  return {
    a: ({ href = '', ...props }) => {
      // Markdown does not natively support links that open in a new tab,
      // but we can handle that here by checking for external links.
      // If a link imported from a Markdown file points to an external address, 
      // it will open in a new tab.
      const isExternal = href.startsWith('http');
      if (isExternal) {
        return (
          <a
            className='text-amber-300'
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        );
      }
      return <Link href={href} {...props} />;
    },
    // We can add specific Tailwind classes here as well :) 
    h2: (props) => <h2 className='text-2xl font-bold mt-2 mb-4' {...props} />,
    ...components,
  };
};
