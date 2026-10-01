<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkoutSession;
use App\Models\WorkoutTemplate;
use Carbon\Carbon;
use App\Models\WorkoutExercise;
class WorkoutSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutSessions = WorkoutSession::where('user_id','=',$request->user()->id)->with('workoutExercises')->get();
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
            'note' => 'nullable|string|max:255',
            'workout_template_id' => 'integer|required|exists:workout_templates,id',
        ]);
        $workoutTemplate = WorkoutTemplate::findOrFail($validated['workout_template_id']);
        
        $user_id = $request->user()->id;
        $name = $workoutTemplate->name;
        $date = Carbon::today();
        if ($workoutTemplate->user_id !== null && $workoutTemplate->user_id !== $user_id){
            return response()->json([
                'success' => false,
                'data' => $workoutTemplate,
                'message' => 'Unauthorized'
            ],403);
        };
        $validated['user_id'] = $user_id;
        $validated['name'] = $name;
        $validated['date'] = $date;
        $workoutSession = WorkoutSession::create($validated);
        unset($workoutSession->user_id);

        foreach ($workoutTemplate->workoutTemplateExercises as $workoutTemplateExercise) {
            WorkoutExercise::create([
                'exercise_id' => $workoutTemplateExercise->exercise_id,
                'workout_session_id' => $workoutSession->id
            ]);
        }
        
        
        return response()->json([
            "success" => true,
            "data" => $workoutSession,
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
        ],200);
        //
    }
}
