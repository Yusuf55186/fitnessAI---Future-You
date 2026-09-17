<?php

namespace App\Models;
use App\Models\Exercise;
use App\Models\WorkoutSession;
use Illuminate\Database\Eloquent\Model;
use App\Models\WorkoutSet;
class WorkoutExercise extends Model
{
    protected $fillable = [
        'workout_session_id',
        'exercise_id',
        
    ];
    public function exercise(){
        return $this->belongsTo(Exercise::class);
    }
    public function session(){
        return $this->belongsTo(WorkoutSession::class);
    }
    public function workoutSets()
{
    return $this->hasMany(WorkoutSet::class)
        ->orderBy('set_number', 'asc');
}
    //
}
