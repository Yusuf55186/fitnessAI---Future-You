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
        $workoutExercises = WorkoutExercise::whereHas('session', function ($query) use ($request) {
            $query->where('user_id', $request->user()->id);
            
        })->get();
        $workoutExercise = $workoutExercises->map(function ($workoutExercise){
            unset($workoutExercise->user_id);
            return $workoutExercise;
        });
        return response()->json([
            "success" => true,
            "data" => $workoutExercises,
            "message" => "Workouts viewed"
        ],200);
        
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
        unset($workoutExercise->user_id);
       
        return response()->json([
            "success" => true,
            "data" => $workoutExercise,
            "message" => "WorkoutExercise added"
        ],201);
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
        unset($workoutExercise->user_id);
        
        return response()->json([
            "success" => true,
            "data" => $workoutExercise,
            "message" => "Workout viewed"
        ],200);
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

        ],200);
        if($workoutExercise->session->user_id !== $request->user()->id){
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        $workoutExercise->update($validated);
        unset($workoutExercise->user_id);
        
        return response()->json([
            "success" => true,
            "data" => $workoutExercise,
            "message" => "Workout updated"
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
        unset($workoutExercise->user_id);
        
        return response()->json([
            "success" => true,
            "data" => $workoutExercise,
            "message" => "Workout deleted"
        ],200);

        //
    }
}
