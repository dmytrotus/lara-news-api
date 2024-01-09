import type { Article } from "../lib/definitions"

export default function PostTile({ post }: {post: Article}) {

    return (
      <div className="group cursor-pointer">
          <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a className="relative block aspect-video">
              <img
                  src={post.url_to_image}
                  alt="post"
                  className="object-cover transition-all w-full"
              />
              </a>
          </div>
          <div className="flex gap-3">
              <a href={post.url}>
                  <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{post.source}
                  </span>
              </a>
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
              <a href={post.url}>
                  <span
                      className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                  >
                      {post.title}
                  </span>
              </a>
          </h2>
  
      </div>
  
    )
}