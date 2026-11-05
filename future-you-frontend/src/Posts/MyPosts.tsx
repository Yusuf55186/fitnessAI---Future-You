 import { useEffect, useState } from "react"
  import type { Post } from "../types/posts";
import { IMAGE_API_URL } from "../api/config";
import { getUserPosts } from "../api/services";

export const MyPosts = () => {
        const [userPosts,setUserPosts] = useState<Post[]>([]);
        const [error,setError] = useState<string | null> (null);
        useEffect(() => {
              const fetchUserPosts = async () => {
                try {
                const response = await getUserPosts();
                setUserPosts(response.data);
                }
                catch (e:unknown){
                  setError(e instanceof Error ? e.message : "Failed to load UserPosts");
                }
              }
              fetchUserPosts();
              
            },[])
    return (
        <>
        <div>{error}</div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {userPosts.map((post) => (
    <article
      key={post.id}
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
    >
      {post.image_url && (
            <img
              src={`${IMAGE_API_URL}/storage/${post.image_url}`}
              alt={post.title}
              className="aspect-square w-full bg-fy-bg-subtle object-cover"
            />
          )}
      <h3 className="text-xl font-semibold text-white">
        {post.title}
      </h3>

      <p className="mt-3 text-zinc-400">
        {post.content}
      </p>
      </article>

  ))}
</section>
</>
    )
}