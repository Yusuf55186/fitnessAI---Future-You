import { useEffect, useState } from "react"
import { getPosts } from "../api/services"
import { createPosts } from "../api/services";
import { type CreatePostPayload } from "../types/posts";
import { IMAGE_API_URL } from "../api/config";
import type { language } from "../types/language";
import { translations } from "../il8n/translations";
export type Post = CreatePostPayload & {
  id: number;
  user:{
    id:number,
    name:string;
  }
};
type LikedPosts = {
  liked:boolean;
  count:number;
  post_id:number;
}
type Props = {
  username:string;
  language:language
}
export const Posts = ({username,language}:Props) => {
    const [Posts,setPosts] = useState<Post[]>([]);
    const [createPost,setCreatePost] = useState<CreatePostPayload>({title:'',content:'',category_id:1,});
    const [likeButton,setLikeButton] = useState <LikedPosts[]>([]);
const [error,setError] = useState<string | null> (null);
    useEffect(() => {
        const fetchPosts =  async () => {
            try {
                const response = await getPosts();
                 setPosts(response.data);
                 
            }
             catch (e:unknown){
          setError(e instanceof Error ? e.message : "Failed to load UserPosts");
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
  const likeButtonHandler = (post_id: number) => {
    setLikeButton((prevLike) => {
      const currentLike = prevLike.find((item) => item.post_id === post_id);
      if (!currentLike) {
        const like: LikedPosts = {
          post_id,
          liked: true,
          count: 1,
        };
        return [...prevLike, like];
      }

      return prevLike.map((prev) =>
        prev.post_id === post_id
          ? { ...prev, liked: !prev.liked, count: prev.count + (prev.liked ? -1 : 1) }
          : prev,
      );
    });
  }
    return (
  <section className="mx-auto w-full max-w-2xl space-y-8 px-4 py-6">
    {error && (
      <p
        role="alert"
        className="rounded-lg border border-fy-danger/40 bg-fy-danger/10 px-4 py-3 text-sm text-fy-text"
      >
        {error}
      </p>
    )}

    <form
      onSubmit={(e) => {
        e.preventDefault();
        void SubmitHandler();
      }}
      className="space-y-5 rounded-2xl border border-fy-border bg-fy-surface p-5 shadow-lg shadow-black/10 sm:p-6"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fy-accent">
          Futurize
        </p>
        <h1 className="mt-1 text-2xl font-bold text-fy-text">
          Deel je progressie
        </h1>
      </div>

      <div>
        <label
          htmlFor="post-title"
          className="mb-2 block text-sm font-semibold text-fy-text"
        >
          Titel
        </label>
        <input
          id="post-title"
          name={translations[language].createPost}
          type="text"
          value={createPost.title}
          onChange={(e) =>
            setCreatePost({ ...createPost, title: e.target.value })
          }
          placeholder=""
          className="w-full rounded-xl border border-fy-border bg-fy-bg px-4 py-3 text-fy-text placeholder:text-fy-text-muted outline-none transition focus:border-fy-accent focus:ring-2 focus:ring-fy-accent/20"
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
          className="w-full resize-y rounded-xl border border-fy-border bg-fy-bg px-4 py-3 text-fy-text placeholder:text-fy-text-muted outline-none transition focus:border-fy-accent focus:ring-2 focus:ring-fy-accent/20"
        />
      </div>

      <div>
        <label
          htmlFor="post-img"
          className="mb-2 block text-sm font-semibold text-fy-text"
        >
          Afbeelding
        </label>
        <input
          id="post-img"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setCreatePost({
              ...createPost,
              image_url: e.target.files?.[0],
            })
          }
          className="block w-full cursor-pointer rounded-xl border border-fy-border bg-fy-bg text-sm text-fy-text-secondary file:mr-4 file:border-0 file:bg-fy-surface-elevated file:px-4 file:py-3 file:font-semibold file:text-fy-text hover:file:bg-fy-surface-hover"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-fy-accent px-5 py-3 font-semibold text-fy-text-on-accent transition hover:bg-fy-accent-hover sm:w-auto"
      >
        Plaats update
      </button>
    </form>

    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fy-text-muted">
          Community
        </p>
        <h2 className="mt-1 text-xl font-bold text-fy-text">
          Laatste updates
        </h2>
      </div>

      {Posts.map((post) =>
    
       (
        <article
          key={post.id}
          className="overflow-hidden rounded-2xl border border-fy-border bg-fy-surface shadow-lg shadow-black/10"
        >
          {post.image_url && (
            <img
              src={`${IMAGE_API_URL}/storage/${post.image_url}`}
              alt={post.title}
              className="aspect-square w-full bg-fy-bg-subtle object-cover"
            />
          )}

          <div className="p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-fy-surface-elevated font-bold text-fy-accent">
                {(post.user?.name ?? username).charAt(0).toUpperCase()}
              </div>
              <p  className="text-sm font-semibold text-fy-text">
                {post.user?.name ?? username}
              </p>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <button
                type="button"
                aria-label="Vind ik leuk"
                className="text-2xl text-fy-text-secondary transition hover:text-fy-accent"
                onClick={() => likeButtonHandler(post.id)}
              >
                {likeButton.find((item) => item.post_id === post.id)?.liked
                  ? "♥"
                  : "♡"}{" "}
                {likeButton.find((item) => item.post_id === post.id)?.count ?? 0}
              </button>
              <button
                type="button"
                aria-label="Reageren"
                className="text-xl text-fy-text-secondary transition hover:text-fy-accent"
              >
                ◯
              </button>
            </div>

            <h3 className="font-semibold text-fy-text">{post.title}</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-fy-text-secondary">
              {post.content}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
)
}