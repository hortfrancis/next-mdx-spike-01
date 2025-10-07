# next-mdx-spike-01

A spike for learning how to use [**MDX**](https://mdxjs.com/) in [**Next.js**](https://nextjs.org/docs)

## Technical notes

- [`app/page.tsx`](app/page.tsx) imports and renders [`content/hello.mdx`](content/hello.mdx).
- Custom components for the Markdown parser are defined in [`mdx-components.tsx`](mdx-components.tsx).
  - This allows conditional logic and use of Tailwind CSS classes.
  - Links are intercepted and the target URL is checked to see if it's internal or external. External links open in a new tab. Internal links use Next.js's `<Link>` component for proper client-side navigation.
