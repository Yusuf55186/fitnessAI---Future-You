import { useEffect, useState } from "react"
import { getPosts } from "../api/services"
import { createPosts } from "../api/services";
import { type CreatePostPayload } from "../types/posts";
type Post = CreatePostPayload & {
  id: number;
};
export const Posts = () => {
    const [Posts,setPosts] = useState<Post[]>([]);
    const [createPost,setCreatePost] = useState<CreatePostPayload>({title:'',content:'',category_id:1,});
const [error,setError] = useState<string | null> (null);
    useEffect(() => {
        const fetchPosts =  async () => {
            try {
                const response = await getPosts();
                 setPosts(response.data);
                 
            }
            catch(err:any){
                setError(err.message || "Couldn't load Posts");
            }
            
        }
        fetchPosts();
    },[])
   const SubmitHandler = async () => {
  try {
    const response = await createPosts(
      createPost.title,
      createPost.content,
      createPost.category_id,
      createPost.image_url,
    );

    setPosts((prevPosts) => [response.data, ...prevPosts]);
  } catch (err) {
    setError(err instanceof Error ? err.message : "Couldn't create post");
  }
};
    
    return (
        <section className="w-full h-min-screen flex justify-center items-center mt-4">
           <form
  onSubmit={(e) => {
    e.preventDefault();
    void SubmitHandler();
  }}
  className="w-full max-w-xl space-y-5 rounded-xl border border-fy-border bg-fy-surface p-6"
>
  <div>
    <label
      htmlFor="post-title"
      className="mb-2 block text-sm font-semibold text-fy-text"
    >
      Titel
    </label>
    <input
      id="post-title"
      name="title"
      type="text"
      value={createPost.title}
      onChange={(e) =>
        setCreatePost({ ...createPost, title: e.target.value })
      }
      placeholder="Waar ben je trots op?"
      className="w-full rounded-lg border border-fy-border bg-fy-bg px-4 py-3 text-fy-text placeholder:text-fy-text-muted outline-none transition focus:border-fy-accent focus:ring-2 focus:ring-fy-accent/20"
    />
  </div>

  <div>
    <label
      htmlFor="post-content"
      className="mb-2 block text-sm font-semibold text-fy-text"
    >
      Je update
    </label>
    <textarea
      id="post-content"
      name="content"
      rows={4}
      value={createPost.content}
      onChange={(e) =>
        setCreatePost({ ...createPost, content: e.target.value })
      }
      placeholder="Deel je progressie, een vraag of een les uit je training..."
      className="w-full resize-y rounded-lg border border-fy-border bg-fy-bg px-4 py-3 text-fy-text placeholder:text-fy-text-muted outline-none transition focus:border-fy-accent focus:ring-2 focus:ring-fy-accent/20"
    />
  </div>

  <button
    type="submit"
    className="rounded-lg bg-fy-accent px-5 py-3 font-semibold text-fy-text-on-accent transition hover:bg-fy-accent-hover"
  >
    Plaats update
  </button>
</form>
         <article className="overflow-hidden rounded-xl border border-fy-border bg-fy-surface w-[50%]">
            {Posts.map((post) => {
                return (
                    <>
                 

      {/* Acties en tekst */}
      <div className="p-4 w-">
        <div className="mb-4 flex items-center gap-4">
          <button
            type="button"
            aria-label="Vind ik leuk"
            className="text-xl text-fy-text-secondary transition hover:text-fy-accent"
          >
            ♡
          </button>
          <button
            type="button"
            aria-label="Reageren"
            className="text-xl text-fy-text-secondary transition hover:text-fy-accent"
          >
            ◯
          </button>
        </div>

        <h2 className="font-semibold text-fy-text">{post.title}</h2>
        <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-fy-text-secondary">
          {post.content}
        </p>
      </div>
      </>
                )
            })}
     
    </article>
    </section>
    )
}