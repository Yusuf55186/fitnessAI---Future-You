<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
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
            'image_url' => "string|max:20|nullable",
            'content' => "string|max:255'|required",
            'category_id' => "string|exists:category,id",
            'user_id' => $user_id,
        ]);
        $post = Post::create([$validated]);
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
        //
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
        //
    }
}
