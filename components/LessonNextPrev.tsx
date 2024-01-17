import Link from 'next/link';
import { PostType } from '../lib/blogapi';
import BackgroundImage from './BackgroundImage';
import DateFormatter from './DateFormatter';

export default function LessonNextPrev({ prevPost, nextPost }: { prevPost: PostType, nextPost: PostType }) {

  return (
    <section className="pb-10">
      <div className="md:grid md:grid-cols-2 gap-4">
        {prevPost?.title ? <PostPreview post={prevPost} prev={true} /> : <NothingToSeeHere prev={true} />}
        {nextPost?.title ? <PostPreview post={nextPost} prev={false} /> : <NothingToSeeHere prev={false} />}
      </div>
    </section>
  )
}

const PostPreview = ({ post, prev }: { post: PostType, prev: boolean }) => {

  var postColor = "bg-black";
  if (post.label.type == "lab") postColor = "bg-blue-600"
  if (post.label.type == "extra") postColor = "bg-orange-600"

  return (
    <div className="rounded-md bg-neutral-700 mb-4">
      <CoverImage
        slug={post.slug}
        title={post.title}
        src={post.coverImage}
      />
      <div className="relative">
        <p className={postColor + " absolute right-0 z-10 px-4 text-white rounded-full -translate-x-3 -translate-y-3 text-xs font-semibold py-1 shadow-lg"}>
          {post.label.title || "?"}
        </p>
      </div>
      <div className="py-4 px-8 text-white">
        <h3 className="text-2xl mb-3 leading-snug group flex flex-col">
          <Link as={`/lesson/${post.slug}`} href="/lesson/[slug]">
            <a className="group-hover:underline font-semibold text-xl text-blue-400">{prev ? "Previous Lesson" : "Next Lesson"}</a>
          </Link>
          <Link as={`/lesson/${post.slug}`} href="/lesson/[slug]">
            <a className="group-hover:underline font-semibold">{post.title}</a>
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
      {slug ? <Link as={`/lesson/${slug}`} href="/lesson/[slug]"><a aria-label={title}>{image}</a></Link> : image}
    </div>
  )
}

const NothingToSeeHere = ({ prev }: { prev: boolean }) => {
  return (
    <div className="bg-neutral-700 p-4 rounded-md text-white text-2xl mb-4">
      {
        prev ?
          <p className="px-5">No lessons before this one</p>
          :
          <p className="px-5">You&apos;ve read all the lessons. Awesome!</p>
      }
    </div>
  );
}