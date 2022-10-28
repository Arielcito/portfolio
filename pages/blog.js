import {BlogItem} from '../components/BlogItem';
import fs from 'fs';
import matter from 'gray-matter';
import Layout from "../components/layouts/article";

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function blog({posts}) {
    return(
    <Layout title='blog'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <BlogItem slug={slug} frontmatter={frontmatter}/>
        </div>
      ))}
    </Layout>
    )
}