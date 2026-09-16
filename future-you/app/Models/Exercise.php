<?php

namespace App\Models;
use App\Models\WorkoutExercise;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $fillable = [
        'name',
    ];
    public function workoutLogs(){
        return $this->hasMany(WorkoutExercise::class);
    }
    //
}
