<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\WorkoutTemplateExercise;
use App\Models\WorkoutTemplate;
class WorkoutTemplateExerciseController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'workout_template_id' => 'int|required|exists:workout_templates,id',
            'exercise_id' => 'int|required|exists:exercises,id'
        ]);
        $workoutTemplate = WorkoutTemplate::findOrFail($validated['workout_template_id']);
            if($workoutTemplate->user_id !== $request->user()->id){
                return response()->json([
                'success' => false,
                'data' => $workoutTemplate,
                'message' => 'Unauthorized'
                ],403);
            }
            $workoutExerciseTemplate = WorkoutTemplateExercise::create($validated);
            return response()->json([
            'success' => true,
            'data' => $workoutExerciseTemplate,
            'message' => 'WorkoutExerciseTemplate added',
            ],201);
    }
    public function destroy(string $id, Request $request) {
        $workoutExerciseTemplate = WorkoutExerciseTemplate::findOrFail($id);
        if($request->user()->id !== $workoutExerciseTemplate->workoutTemplate->user_id){
            return response()->json([
            'success' => false,
            'data' => $workoutExerciseTemplate,
            'message' => 'Unauthorized'
            ],403);
        }
        $workoutExerciseTemplate->delete();
        return response()->json([
            'success' => true,
            'data' => $workoutExerciseTemplate,
            'message' => 'WorkoutExerciseTemplate deleted',
        ],200);

    }
    //
}
