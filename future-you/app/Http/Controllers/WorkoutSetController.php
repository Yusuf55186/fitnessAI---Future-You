<?php

namespace App\Http\Controllers;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
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
            'set_number' => ['required','integer',
            Rule::unique('workout_sets', 'set_number')
            ->where('workout_exercise_id', $request->input('workout_exercise_id')),
        ],
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
        $workoutSet = WorkoutSet::findOrfail($id);
        return response()->json([
            'workoutsSet' => $workoutSet,
            'message' => 'Set preview',
        ]);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $workoutSet = WorkoutSet::findOrfail($id);
        $validated = $request->validate([
            'reps' => 'required|integer',
            'set_number' => ['required','integer',
            Rule::unique('workout_sets', 'set_number')
            ->ignore($id)
            ->where('workout_exercise_id', $request->input('workout_exercise_id')),
        ],
            'weight' => 'required|numeric',
            'rir' => 'required|integer',
            'workout_exercise_id' => 'required|exists:workout_exercises,id',
        ]);
        $workoutSet->update($validated);
        return response()->json([
            'workoutSet' => $workoutSet,
            'message' => 'Set updated',
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $workoutSet = WorkoutSet::findOrFail($id);
        $workoutSet->delete();
        return response()->json([
            'workoutSet' => $workoutSet,
            'message' => 'Set deleted',
        ]);
        //
    }
}
