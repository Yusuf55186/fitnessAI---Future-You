<?php

namespace App\Http\Controllers;
use App\Models\WorkoutTemplate;
use Illuminate\Http\Request;

class WorkoutTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutTemplates = WorkoutTemplate::whereNull('user_id')->orWhere('user_id',"=",$request->user()->id)->get();

        return response()->json([
            'success' => true,
            'data' => $workoutTemplates,
            'message' => 'Templates viewed'
        ],200);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string'
        ]);
        $workoutTemplate = WorkoutTemplate::create([
            'user_id' => $request->user()->id,
            'name' => $validated['name']
            
        ]);
        return response()->json([
            'success' => true,
            'data' => $workoutTemplate,
            'message' => 'workoutTemplate created'
        ],201);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $workoutTemplate = WorkoutTemplate::with(
            'workoutTemplateExercises.exercise'
        )->findOrfail($id);
        //
        return response()->json([
            'success' => true,
            'data' => $workoutTemplate,
            'message' => 'WorkoutTemplate viewed'
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $workoutTemplate = WorkoutTemplate::findOrFail($id);
        
        if ($workoutTemplate->user_id !== $request->user()->id){
            return response()->json([
                'success' => false,
                'data' => $workoutTemplate,
                'message' => 'Unauthorized'
            ],403);
    }
    $validated = $request->validate([
        'name' => 'string|required'
    ]);
    $workoutTemplate->update($validated);
    return response()->json([
        'success' => true,
        'data' => $workoutTemplate,
        'message' => 'WorkoutTemplate updated'
    ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, Request $request)
    {
        $workoutTemplate = WorkoutTemplate::findOrFail($id);
        if($request->user()->id !== $workoutTemplate->user_id){
            return response()->json([
                'success' => false,
                'data' => $workoutTemplate,
                'message' => 'Unauthorized'
            ],403);
        }
        $workoutTemplate->delete();
        return response()->json([
            'success' => true,
            'data' => $workoutTemplate,
            'message' => 'WorkoutTemplate deleted'
        ],200);
        //
    }
}
