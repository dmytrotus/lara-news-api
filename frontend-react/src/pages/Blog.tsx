import { useState, useEffect } from 'react';
import { getPosts } from '../api/useApi';
import PostTile from '../UI/PostTile';
import { logout } from "../api/useAuthApi";
import { Navigate } from "react-router-dom";

function Blog() {
  const[posts, setPosts] = useState([]);
  const[navigateTo, setNavigateTo] = useState<string | null>(null);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data)
    }).catch((err) => {
      if(err.response.status === 401) {
        setNavigateTo("/login");
      }
    })
  }, [])

  const logoutUser = async () => {
    await logout();
    location.reload();
  }

  if(navigateTo) {
    return <Navigate to={navigateTo} />;
  }
  
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="flex justify-end mb-5">
        <button onClick={logoutUser}>Logout</button>
      </div>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {posts.map((post, index) => <PostTile key={index} post={post} />)}
        </div>
    </div>
  )
}

export default Blog
