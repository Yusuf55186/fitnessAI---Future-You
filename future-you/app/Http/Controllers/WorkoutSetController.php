<?php

namespace App\Http\Controllers;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\WorkoutExercise;
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
        $valWorkoutExercise = WorkoutExercise::findOrFail($validated['workout_exercise_id']);
        if($valWorkoutExercise->user_id !== $request->user()->id){
            return response()->json([
                'message' => 'nice try buddy'
            ],403);
        }
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
    public function show(Request $request,string $id)
    {
        $workoutSet = WorkoutSet::findOrfail($id);
        
        if($workoutSet->workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                'message' => "nice try lil bro 💀💀💀"
            ],403);
        }
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
        if($workoutSet->workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                'message' => "nice try lil bro 💀💀💀"
            ],403);
        }
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
    public function destroy(string $id,Request $request)
    {
        $workoutSet = WorkoutSet::findOrFail($id);
        if($workoutSet->workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                'message' => "nice try lil bro 💀💀💀"
            ],403);
        }
        $workoutSet->delete();
        return response()->json([
            'workoutSet' => $workoutSet,
            'message' => 'Set deleted',
        ]);
        //
    }
}
