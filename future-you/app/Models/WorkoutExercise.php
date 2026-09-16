<?php

namespace App\Models;
use App\Models\Exercise;
use App\Models\WorkoutSession;
use Illuminate\Database\Eloquent\Model;

class WorkoutExercise extends Model
{
    protected $fillable = [
        'workout_session_id',
        'exercise_id',
        'sets',
        'reps',
        'weight',
    ];
    public function exercise(){
        return $this->belongsTo(Exercise::class);
    }
    public function session(){
        return $this->belongsTo(WorkoutSession::class);
    }
    //
}
