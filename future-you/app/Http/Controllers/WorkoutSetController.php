<?php

namespace App\Http\Controllers;
use App\Models\WorkoutSet;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\WorkoutExercise;
use App\Models\WorkoutSession;
class WorkoutSetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutSets= WorkoutSet::whereHas('workoutExercise.session',function ($query) use ($request) {
            $query->where('user_id',$request->user()->id);
        })->get();
        $workoutSets = $workoutSets->map(function ($workoutSet){
            unset($workoutSet->user_id);
            return ($workoutSet);
        });
        return response()->json([
            "success" => true,
            "data" => $workoutSets,
            "message" => "Sets viewed"
        ],200);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'reps' => 'required|integer',
            'weight' => 'required|numeric',
            'rir' => 'required|integer',
            'session_id' => 'exists:workout_sessions,id|integer|required',
            'exercise_id' => 'required|exists:exercises,id|integer',
        ]);
        

        unset($workoutSet->user_id);
        return response()->json([
            "success" => true,
            "data" => $workoutSet,
            "message" => "Set added",
            "session_id" => $sessionId,

        ],200);
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
        unset($workoutSet->user_id);
        return response()->json([
            "success" => true,
            "data" => $workoutSet,
            "message" => "Set viewed"
        ],200);
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
            'weight' => 'required|numeric',
            'rir' => 'required|integer',
        ]);
        $workoutSet->update($validated);
        return response()->json([
            "success" => true,
            "data" => $workoutSet,
            "message" => "Set updated"
        ],200);
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
        $workoutSet->unset($workoutSet->user_id);
        return response()->json([
            "success" => true,
            "data" => $workoutSet,
            "message" => "Set deleted"
        ],200);
        //
    }
}