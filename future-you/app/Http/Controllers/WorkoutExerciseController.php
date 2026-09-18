<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkoutExercise;
use App\Models\WorkoutSession;
class WorkoutExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutExercise = WorkoutExercise::whereHas('session', function ($query) use ($request) {
            $query->where('user_id', $request->user()->id);
        })->get();
        return response()->json($workoutExercise);
        
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
        $valSession = WorkoutSession::findOrFail($validated['workout_session_id']);
        if($valSession->user_id !== $request->user()->id){
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"

            ],403);
        }
        $workoutExercise = WorkoutExercise::create($validated);
       
        return response()->json([
            "workout_exercise" => $workoutExercise,
            "message" => "workout successfully added"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,string $id)
    {
        $workoutExercise = WorkoutExercise::findOrFail($id);
        if($workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                "message" => "nice try lil bro 💀💀💀",
            ],403);
        }
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
        if($workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
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
    public function destroy(Request $request,string $id)
    {
        $workoutExercise = WorkoutExercise::findOrFail($id);
        if($workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        $workoutExercise->delete();
        return response()->json([
            "workout" => $workoutExercise,
            "message" => "workout successfully deleted"
        ],200);

        //
    }
}
