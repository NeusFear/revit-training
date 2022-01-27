import Link from 'next/link';
import { useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import DateFormatter from '../components/DateFormatter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getAllPosts, PostType } from '../lib/blogapi';

const HomePage = ({ allPosts }: { allPosts: PostType[] }) => {

  const [hide, setHide] = useState(true);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-screen grid grid-flow-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8 min-h-screen">
        {allPosts.map((post, index) => (
          (!hide || index < 8) && <PostPreview post={post} index={index} key={"post" + index + post.slug} />
        ))}
      </div>
      <div className="w-screen h-1 bg-white cursor-pointer" onClick={() => setHide(false)}></div>
      <Footer />
    </div>
  );
}

const PostPreview = ({ post, index }: { post: PostType, index: number }) => {

  return (
    <div className="rounded-md bg-neutral-700 h-full">
      <CoverImage
        slug={post.slug}
        title={"Lesson " + index + ": " + post.title}
        src={post.coverImage}
      />
      <div className="relative">
        <p className="bg-blue-600 absolute right-0 z-10 px-4 text-white rounded-full -translate-x-3 -translate-y-3 text-xs font-semibold py-1 shadow-lg">{post.label || "?"}</p>
      </div>
      <div className="py-4 px-8 text-white">
        <h3 className="text-2xl mb-3 leading-snug">
          <p className="text-xs -mb-1.5 text-neutral-500">Lesson {index}</p>
          <Link as={`/lesson/${post.slug}`} href="/lesson/[slug]">
            <a className="hover:underline font-semibold">{post.title}</a>
          </Link>
        </h3>
        <div className="mb-2">
          <p className="text-xs -mb-1.5 text-neutral-500">Date Posted</p>
          <DateFormatter dateString={post.date} />
        </div>
        <p className="text-xs leading-relaxed mb-4 text-neutral-300">{post.excerpt}</p>
      </div>
    </div>
  )
}

const CoverImage = ({ title, src, slug }: { title: string, src: string, slug: string | undefined }) => {

  const image = (
    <div className="bg-cover bg-center aspect-video w-full rounded-t-md">
      <BackgroundImage alt={title} className="rounded-t-md" src={src} />
    </div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? <Link as={`/lesson/${slug}`} href="/lesson/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'date',
    'coverImage',
    'excerpt',
    'label'
  ])

  return {
    props: { allPosts },
  }
}

export default HomePage;
