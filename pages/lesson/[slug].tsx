import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import BackgroundImage from '../../components/BackgroundImage'
import Container from '../../components/Container'
import DateFormatter from '../../components/DateFormatter'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LessonNextPrev from '../../components/LessonNextPrev'
import Navbar from '../../components/Navbar'
import { getAllPosts, getNextPost, getPostBySlug, getPrevPost, PostType } from '../../lib/blogapi'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../styles/markdown-styles.module.css'

export default function Post({ post, prevPost, nextPost }: { post: PostType, prevPost: PostType, nextPost: PostType }) {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="overflow-x-hidden">
      <Header
        pageName={post.title}
        pageDesc={post.excerpt}
        ogImage={{ "path": post.coverImage, width: 1280, height: 640 }}
        article={{ "title": post.title, "publisher": "Oklahoma State University SOA", "category": "Education", "tags": ["revit", "training", "tutorial", "lessons"], "publishedTime": post.date}}
      />
      <Navbar />
      {router.isFallback ? (
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          Loading...
        </h1>
      ) : (
        <div className="bg-neutral-800">
          <div className="bg-cover bg-center h-[80vh] w-screen">
            <BackgroundImage alt="coverImage" src={post.coverImage} />
          </div>
          <article className="">
            <div className="max-w-4xl px-4 md:px-20 pb-10 mx-auto bg-neutral-200 -translate-y-20 rounded-lg">
              <h1 className="text-neutral-900 text-6xl md:text-7xl pt-6 lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
                {post.title}
              </h1>
              <DateFormatter dateString={post.date} />
              <div className="w-full bg-neutral-800 h-0.5 my-10"></div>
              <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
          <RecommendedPosts prevPost={prevPost} nextPost={nextPost} />
        </div>
      )}
      <Footer />
    </div>
  )
}

const RecommendedPosts = ({ prevPost, nextPost }: { prevPost: PostType, nextPost: PostType }) => {

  return (
    <div className="bg-neutral-900 bg-opacity-60 pt-10">
      <Container>
        <div className="text-center lg:text-left my-10 w-full text-white">
          <h1 className="text-6xl font-semibold">Read More</h1>
          <p className="font-semibold text-md text-neutral-500 ml-1">Read the next lesson or re-read the last one if you need a refresher.</p>
        </div>
        <LessonNextPrev prevPost={prevPost} nextPost={nextPost} />
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  const prevPost = getPrevPost(params.slug, [
    'title',
    'date',
    'coverImage',
    'excerpt',
  ])

  const nextPost = getNextPost(params.slug, [
    'title',
    'date',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      post: {
        ...post,
        content,
      },
      prevPost: {
        ...prevPost
      },
      nextPost: {
        ...nextPost
      }
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}