<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkoutExercise;
class WorkoutExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(WorkoutExercise::all());
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'workout_session_id' => 'exists:workout_sessions,id|integer|required',
            'exercise_id' => 'exists:exercises,id|integer|required',
            

        ]);
        $workoutExercise = WorkoutExercise::create($validated);
       
        return response()->json([
            "workout_exercise" => $workoutExercise,
            "message" => "workout successfully added"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $workoutExercise = WorkoutExercise::findOrFail($id);
        return response()->json([
            "workoutExercise" => $workoutExercise,
            "message" => "workout preview"
        ]);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $workoutExercise = WorkoutExercise::findOrFail($id);
        $validated = $request->validate([
            'workout_session_id' => 'exists:workout_sessions,id|integer | required',
            'exercise_id' => 'exists:exercises,id|integer | required',
            'sets' => 'required|integer',
            'reps' => 'required|integer',
            'weight' => 'required|numeric',

        ]);
        $workoutExercise->update($validated);
        return response()->json([
            "workout" => $workoutExercise,
            "message" => "workout successfully updated"
        ],200);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $workoutExercise = WorkoutExercise::findOrFail($id);
        $workoutExercise->delete();
        return response()->json([
            "workout" => $workoutExercise,
            "message" => "workout successfully deleted"
        ],200);

        //
    }
}
