import { useState, useEffect } from 'react';
import { getPosts } from '../useApi';
import PostTile from '../UI/PostTile';

function Blog() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res)
    })
    
  }, [])
  
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {posts.map((post, index) => <PostTile key={index} post={post} />)}
        </div>
    </div>
  )
}

export default Blog
