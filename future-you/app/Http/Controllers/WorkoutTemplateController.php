<?php

namespace App\Http\Controllers;
use App\Models\WorkoutTemplate;
use Illuminate\Http\Request;

class WorkoutTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $workoutTemplates = WorkoutTemplate::whereNull('user_id')->orWhere('user_id',"=",$request->user()->id)->get();

        return response()->json([
            'success' => true,
            'data' => $workoutTemplates,
            'message' => 'Templates viewed'
        ]);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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
