import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getAllPosts, PostType } from '../lib/blogapi';

const HomePage = ({ allPosts }: { allPosts: PostType[] }) => {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-screen min-h-screen flex flex-row">
        <div className="bg-neutral-800 min-h-full w-96">
          <h1 className="w-full bg-neutral-700 text-xl text-white px-6 py-2 mb-2">Lessons</h1>
          <LessonListItem title={allPosts[0].title} route={allPosts[0].slug} />
        </div>
        <div className="flex-grow bg-blue-50 min-h-full">
          content
        </div>
      </div>
      <Footer />
    </div>
  );
}

const LessonListItem = ({ title, route }: { title: string, route: string }) => { 

  const router = useRouter();
  const goToLesson = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("lesson/" + route);
  }

  return (
    <div className="bg-neutral-900 rounded-md text-white mx-4 my-1 px-3 py-1 hover:bg-neutral-700 cursor-pointer"
      onClick={goToLesson}
    >
      {title}
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default HomePage;
