<?php

namespace App\Http\Controllers;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;

class WorkoutSetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return repsonse()->json(WorkoutSet::all());
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'reps' => 'required|integer',
            'set_number' => 'required|integer',
            'weight' => 'required|numeric',
            'rir' => 'required|integer',
            'workout_exercise_id' => 'required|exists:workout_exercises,id',
        ]);
        $workoutSet = WorkoutSet::create($validated);
        return response()->json([
            'workoutset' => $workoutSet,
            'message' => 'Set added',
        ]);
        //
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
