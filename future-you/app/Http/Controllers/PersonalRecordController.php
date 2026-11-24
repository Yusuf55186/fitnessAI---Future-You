<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\WorkoutSet;
class PersonalRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $sets = WorkoutSet::whereHas('workoutExercise.session',function ($query){
        $query->where('user_id', Auth::id());
       }
       )
    //    EagerLoading
       ->with('workoutExercise')
        ->get();
    $groupedSets = $sets->groupBy(
        function ($set){
            return $set->workoutExercise->exercise_id;
        });

        $groupedSets = $groupedSets->map(function($groupedSet) {
           return $groupedSet->sortByDesc('weight')->first();
});
return response()->json([
    'success' => true,
    'data' => $groupedSets->values(),
    'message' => 'PR viewed'
]);
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
