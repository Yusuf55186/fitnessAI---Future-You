<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkoutSession;
class WorkoutSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(WorkoutSession::all());     //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required | string | max:255',
            'note' => 'nullable | string | max:255',
            'date' => 'required | date',
        ]);
        $user_id = $request->user()->id;
        $validated['user_id'] = $user_id;
        $sessionWorkout = WorkoutSession::create($validated);
        return response()->json([
            "session added" => $sessionWorkout,
            "message" => "session workout added successfully",
        ],201);

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,string $id)
    {
        $sessionWorkout = WorkoutSession::with(
        'workoutExercises.exercise',
        'workoutExercises.workoutSets')->findOrFail($id);     
        if ($request->user()->id !== $sessionWorkout->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }  
         return response()->json([
            "session" => $sessionWorkout,
            "message" => "session workout previewd successfully",
        ]);
        
        
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $sessionWorkout = WorkoutSession::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required | string | max:255',
            'note' => 'nullable | string | max:255',
            'date' => 'sometimes | date',
        ]);
        if ($request->user()->id !== $sessionWorkout->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        $sessionWorkout->update($validated);
        return response()->json([
            "updated workout" => $sessionWorkout,
            "message" => " session workout updated successfully"
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request,string $id)
    {
        $sessionWorkout = WorkoutSession::findOrFail($id);
        if ($request->user()->id !== $sessionWorkout->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        $sessionWorkout->delete();
        return response()->json([
            "deleted workout" => $sessionWorkout,
            "message" => " session workout deleted successfully",
        ]);
        //
    }
}
