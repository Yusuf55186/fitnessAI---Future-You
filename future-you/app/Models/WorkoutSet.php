<?php

namespace App\Models;
use App\Models\WorkoutExercise;
use Illuminate\Database\Eloquent\Model;

class WorkoutSet extends Model
{
    protected $fillable = [
        'workout_exercise_id',
        'reps',
        'weight',
        'rir',
        'set_number',
    ];
    public function workoutExercise(){
        return $this->belongsTo(WorkoutExercise::class);
    }
    //
}
