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
            'user_id' => 'required|exists:users,id',
            'date' => 'required | date',
        ]);
        $sessionWorkout = WorkoutSession::create($validated);
        return response()->json([
            "session added" => $sessionWorkout,
            "message" => "session workout added successfully",
        ]);

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $sessionWorkout = WorkoutSession::with(
        'workoutExercises.exercise',
        'workoutExercises.workoutSets')->findOrFail($id);       
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
            'user_id' => 'required|exists:users,id',
            'date' => 'required | date',
        ]);
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
    public function destroy(string $id)
    {
        $sessionWorkout = WorkoutSession::findOrFail($id);
        $sessionWorkout->delete();
        return response()->json([
            "deleted workout" => $sessionWorkout,
            "message" => " session workout deleted successfully",
        ]);
        //
    }
}
