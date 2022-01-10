import Link from 'next/link';
import BackgroundImage from '../components/BackgroundImage';
import DateFormatter from '../components/DateFormatter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getAllPosts, PostType } from '../lib/blogapi';

const HomePage = ({ allPosts }: { allPosts: PostType[] }) => {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-screen grid grid-flow-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8 min-h-screen">
        {allPosts.map((post, index) => (
          index < 1 && <PostPreview post={post} index={index} key={"post" + index + post.slug} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const PostPreview = ({ post, index }: { post: PostType, index: number }) => {

  return (
    <div className="rounded-md bg-neutral-700 mb-4 h-min">
      <CoverImage
        slug={post.slug}
        title={"Lesson " + index + ": " + post.title}
        src={post.coverImage}
      />
      <div className="py-4 px-8 text-white">
        <h3 className="text-2xl mb-3 leading-snug">
          <Link as={`/lesson/${post.slug}`} href="/lesson/[slug]">
            <a className="hover:underline font-semibold">{post.title}</a>
          </Link>
        </h3>
        <div className="mb-2">
          <DateFormatter dateString={post.date} />
        </div>
        <p className="text-xs leading-relaxed mb-4">{post.excerpt}</p>
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
      {slug ? <Link as={`/blog/${slug}`} href="/blog/[slug]"><a aria-label={title}>{image}</a></Link> : image}
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
  ])

  return {
    props: { allPosts },
  }
}

export default HomePage;
