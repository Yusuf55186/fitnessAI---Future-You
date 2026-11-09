<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user')->orderBy("created_at","DESC")->get();
        return response()->json([
            "success" => true,
            "data" => $posts,
            "message" => "Posts successfully viewed ",
            
        ],200);      //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = $request->user()->id;
        $validated = $request->validate([
            'title' => "string|max:255|required",
            'image_url' => "image|max:2048|nullable",
            'content' => "string|max:255|required",
            'category_id' => "integer|exists:categories,id",
        ]);
        $path = null;
        if ($request->hasFile('image_url')){
          $disk = Storage::disk('public');
         $path = $disk->putFile("posts",$validated['image_url']);
        }
         
        $post = Post::create([
            'user_id' => $user_id,
            'title' => $validated['title'],
            'content' => $validated['content'],
            'image_url' => $path,
            'category_id' => $validated['category_id']
            

        ]);
        return response()->json([
            'success' => true,
            'data' => $post,
            'message' => 'post successfully created '
        ],201);
    
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $post,
            'message' => 'post successfully viewed'
        ]);
        //
    }
    public function showUserPosts(Request $request)
    {
        $userPost = Post::where('user_id',$request->user()->id)->get();
        return response()->json([
            'success' => true,
            'data' => $userPost,
            'message' => 'User posts successfully viewed'
             
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::findOrFail($id);
        
        return response()->json([
            'success' => true,
            'data' => $post,
            'message' => 'post successfully deleted'
        ]);
        //
    }
}
