import PostTile from './PostTile';
import type { Articles } from '../lib/definitions';

async function getPosts() {
    const res = await fetch(`http://localhost:7717/api/posts`)
    return res.json()
  }

export default async function Page() {

    const posts: Articles = await getPosts();

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {posts.map((post, index) => <PostTile key={index} />)}
        </div>
    </div>

  )
}
