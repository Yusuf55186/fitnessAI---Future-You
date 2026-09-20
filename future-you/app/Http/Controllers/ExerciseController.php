<?php

namespace App\Http\Controllers;
use App\Models\Exercise;
use Illuminate\Http\Request;

class ExerciseController extends Controller

{
    

    /**
     * 
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $exercise = Exercise::whereNull('user_id')->
        orWhere('user_id', '=', $request->user()->id)->get();
        return response()->json([
            'exercise' => $exercise,
            'message' => 'Exercises viewed'
        ],200);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            
        ]);
        $exercise = Exercise::create([
            'name' => $validated['name'],
            'user_id' => $request->user()->id,
        ]);
        
        return response()->json([
            "message" => "Exercise added successfully",
            "exercise" => $exercise,
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        
        $exercise =  Exercise::where(function($query) use ($request) { $query->whereNull('user_id')->
        orWhere('user_id','=',$request->user()->id);})->where('exercises.id','=',$id)->findOrFail($id);
        return response()->json([
            "exercise" => $exercise,
            "message" => "Exercise retrieved successfully", 
        ],200);
        //
    }
   
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $exercise = Exercise::where('exercises.id','=',$id)->where('user_id','=',$request->user()->id)->findOrFail($id);
        $exercise->update($validated);
        
        return response()->json([
            "Updated Exercise" => $exercise,
            "message" => "Exercise updated successfully"
        ],200);
        
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id,Request $request)
    {
        $exercise = Exercise::where('exercises.id','=',$id)->where('user_id','=',$request->user()->id)->findOrFail($id);
        $exercise->delete();

        return response()->json([
            "Deleted Exercise" => $exercise,
            "message" => "Exercise deleted successfully"
        ],200);

        //
    }
}
