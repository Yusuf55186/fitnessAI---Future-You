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
    public function index()
    {
        return response()->json(Exercise::all());
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
        $exercise = new Exercise;
        $exercise->name = $validated['name'];
        $exercise->save();
        return response()->json([
            "message" => "Exercise added successfully",
            "exercise" => $exercise,
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $exercise = Exercise::findOrFail($id);
        return response()->json([
            "exercise" => $exercise,
            "message" => "Exercise added successfully", 
        ],200);
        //
    }
   
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $exercise = Exercise::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);
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
    public function destroy(string $id)
    {
        //
    }
}
