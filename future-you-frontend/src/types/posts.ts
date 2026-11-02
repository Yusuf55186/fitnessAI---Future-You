
export type CreatePostPayload = {
    title:string;
    content:string;
    category_id:number;
    image_url?:File;
}
export type ApiResponse<T> = { success: boolean; data: T; message: string };
export type Post = CreatePostPayload & {
  id: number;
};
