<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkoutSession;
class WorkoutSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutSessions = WorkoutSession::where('user_id','=',$request->user()->id)->get();
        $workoutSessions = $workoutSessions->map(function ($workoutSession){
            unset($workoutSession->user_id);
            return $workoutSession;
        });  //
        return response()->json([
            "success" => true,
            "data" => $workoutSessions,
            "message" => "Sessions retrieved"

        ]);
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
        $workoutSessions = WorkoutSession::create($validated);
        unset($workoutSessions->user_id);
        
        return response()->json([
            "success" => true,
            "data" => $workoutSessions,
            "message" => "Session created"
        ],201);

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,string $id)
    {
        $workoutSessions = WorkoutSession::with(
        'workoutExercises.exercise',
        'workoutExercises.workoutSets')->findOrFail($id);
        
        if ($request->user()->id !== $workoutSessions->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        unset($workoutSessions->user_id);
         return response()->json([
            "success" => true,
            "data" => $workoutSessions,
            "message" => "Session retrieved"
        ],200);
        
        
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $workoutSessions = WorkoutSession::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required | string | max:255',
            'note' => 'nullable | string | max:255',
            'date' => 'sometimes | date',
        ]);
        if ($request->user()->id !== $workoutSessions->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        
        $workoutSessions->update($validated);
        unset($workoutSessions->user_id);
        return response()->json([
           "success" => true,
           "data" => $workoutSessions,
           "message" => "Session updated"
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request,string $id)
    {
        $workoutSessions = WorkoutSession::findOrFail($id);
        if ($request->user()->id !== $workoutSessions->user_id) {
            return response()->json([
                "message" => "nice try lil bro 💀💀💀"
            ],403);
        }
        unset($workoutSessions->user_id);
        $workoutSessions->delete();
        return response()->json([
            "success" => true,
            "data" => $workoutSessions,
            "message" => "Session deleted"
        ]);
        //
    }
}
